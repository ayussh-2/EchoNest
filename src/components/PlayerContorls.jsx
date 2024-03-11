import React, { useState, useEffect } from "react";
import mp3Audio from "../assets/audio.mp3";

function PlayerControls() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const audio = new Audio(mp3Audio);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            setProgress(percent);
        };

        audio.addEventListener("timeupdate", updateProgress);

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
        };
    }, [audio]);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-80">
            <audio className="w-full" controls>
                <source src={mp3Audio} type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>

            <div className="flex items-center mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                    onClick={togglePlay}
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <div className="flex-1 h-4 bg-gray-300 ml-4 rounded-full">
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerControls;
