import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase/config";
import { getDocs, query, limit, collection } from "firebase/firestore";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";
import PlayNext from "../components/PlayNext";
import MainPlayer from "../components/MainPlayer";
import mp3Audio from "../assets/audio.mp3";
import Loading from "./Loading";
function Landing() {
    const [activeTab, setActiveTab] = useState("recomm");
    const [showPlayer, setShowPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [loading, setLoading] = useState(true);
    const [songsArray, setSongsArray] = useState([]);
    const [recommendedSongs, setRecommendedSongs] = useState([]);
    const [carouselSongs, setCarouselSongs] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    const [nextSongs, setNextSongs] = useState([]);
    const [audio, setAudio] = useState(null);
    async function getSongs() {
        try {
            const q = query(collection(db, "audios"), limit(20));

            const querySnapshot = await getDocs(q);
            const res = [];
            querySnapshot.forEach((doc) => {
                res.push(doc.data());
            });
            console.log(res);
            setSongsArray(res);
            setRecommendedSongs(generateRandomDigits(4, res.length));
            setCarouselSongs(generateRandomDigits(5, res.length));
            setNextSongs(res.slice(currIndex + 1, currIndex + 4));

            setAudio(res[currIndex].url);
        } catch (error) {
            console.error("Error getting documents: ", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        async function fetchSongs() {
            await getSongs();
        }
        fetchSongs();
    }, []);

    useEffect(() => {
        setNextSongs(songsArray.slice(currIndex + 1, currIndex + 4));
    }, [currIndex]);

    function getAudioLink() {
        return songsArray[currIndex].url;
    }

    function generateRandomDigits(n, lim) {
        const randomDigits = [];
        for (let i = 0; i < n; i++) {
            const randomDigit = Math.floor(Math.random() * lim);
            randomDigits.push(randomDigit);
        }
        return randomDigits;
    }
    const audioRef = useRef(null);
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
    function handleAudioState() {
        setIsPlaying(!isPlaying);
    }
    function handleTabs(tab) {
        setActiveTab(tab);
    }
    function handleShowplayer() {
        setShowPlayer(!showPlayer);
    }
    return (
        <AnimatePresence>
            {loading && <Loading />}
            <motion.div
                key={"landing"}
                className={`px-5 font-poppins pb-2 ${loading && "hidden"}`}
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            >
                {!showPlayer && (
                    <motion.div
                        key={"landing2"}
                        initial={{ opacity: 0, y: "100vw" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                    >
                        <Navbar />
                        <Carousel
                            songs={songsArray}
                            carouselSongs={carouselSongs}
                        />
                        <Recommendations
                            active={activeTab}
                            setActive={handleTabs}
                            songs={songsArray}
                            recommendedSongs={recommendedSongs}
                        />
                        <PlayNext songs={nextSongs} />
                    </motion.div>
                )}
                <audio ref={audioRef} className="hidden" src={audio}></audio>

                {showPlayer && (
                    <MainPlayer
                        mainPlayer={handleShowplayer}
                        handlePlayPause={handleAudioState}
                        isPlaying={isPlaying}
                        currentTime={currentTime}
                        totalTime={totalTime}
                        song={songsArray[currIndex]}
                    />
                )}
                {!showPlayer && (
                    <BottomNav
                        mainPlayer={handleShowplayer}
                        handlePlayPause={handleAudioState}
                        isPlaying={isPlaying}
                        song={songsArray[currIndex]}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
}

export default Landing;
