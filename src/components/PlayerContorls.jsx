import React, { useState, useRef, useEffect } from "react";
import mp3Audio from "../assets/audio.mp3";

function PlayerControls() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };
    //get audio state
    useEffect(() => {
        if (isPlaying) {
            playAudio();
        } else {
            pauseAudio();
        }
    }, [isPlaying]);

    //get audio position
    useEffect(() => {
        const audioElement = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audioElement.currentTime);
        };

        const handleLoadedMetadata = () => {
            setTotalTime(audioElement.duration);
        };

        audioElement.addEventListener("timeupdate", handleTimeUpdate);
        audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audioElement.removeEventListener("timeupdate", handleTimeUpdate);
            audioElement.removeEventListener(
                "loadedmetadata",
                handleLoadedMetadata
            );
        };
    }, []);
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    const calculateBallPosition = () => {
        return (currentTime / totalTime) * 100;
    };

    return (
        <div className="mt-5 p-4 rounded-lg w-80">
            <audio ref={audioRef} className="w-full hidden">
                <source src={mp3Audio} type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
            <div className="mt-5 mb-10">
                <div className="flex items-center justify-between">
                    <p className="text-sm">{formatTime(currentTime)}</p>
                    <p className="text-sm">{formatTime(totalTime)}</p>
                </div>
                <div className="bg-gray-500 my-5 w-full h-2 rounded-full flex items-center">
                    <div
                        className="bg-black h-2 text-xs rounded-full"
                        style={{ width: `${calculateBallPosition()}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <button>
                    <i class="fa-solid fa-backward text-black"></i>
                </button>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    <i
                        class={`bg-black rounded-full fa-solid fa-${
                            isPlaying ? "pause" : "play"
                        } text-white px-5 py-4`}
                    ></i>
                </button>
                <button>
                    <i class="fa-solid fa-forward text-black"></i>
                </button>
            </div>
        </div>
    );
}

export default PlayerControls;
