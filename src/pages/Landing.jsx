import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db, auth } from "../firebase/config";
import {
    getDocs,
    query,
    limit,
    collection,
    doc,
    arrayUnion,
    updateDoc,
    getDoc,
    setDoc,
    where,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";
import PlayNext from "../components/PlayNext";
import MainPlayer from "../components/MainPlayer";
import Likes from "../components/Likes";
import Loading from "./Loading";
import Modal from "../components/Modal";
import Search from "../components/Search";
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
    const [loggedIn, setLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [userId, setUserId] = useState(null);
    const [currentTab, setCurrentTab] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    async function getSongs() {
        try {
            const q = query(collection(db, "audios"), limit(20));
            const querySnapshot = await getDocs(q);
            const res = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.songId = doc.id;
                res.push(data);
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
        getSongs();
        checkUser();
    }, []);

    useEffect(() => {
        setNextSongs(songsArray.slice(currIndex + 1, currIndex + 4));
    }, [currIndex]);

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
    function playNext() {
        if (currIndex === songsArray.length - 1) return setCurrIndex(0);
        setCurrIndex((prev) => prev + 1);
        setAudio(songsArray[currIndex + 1].url);
        setIsPlaying(false);
    }
    function playPrev() {
        if (currIndex === 0) return setCurrIndex(songsArray.length - 1);
        setCurrIndex((prev) => prev - 1);
        setAudio(songsArray[currIndex - 1].url);
        setIsPlaying(false);
    }
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
    function playOnTap(songId) {
        const song = songsArray.find((obj) => obj.songId === songId);
        console.log(song);
        setCurrIndex(findSongIndex(songId));
        setAudio(song.url);
        setIsPlaying(false);
    }
    function findSongIndex(songId) {
        const index = songsArray.findIndex((obj) => obj.songId === songId);
        return index;
    }
    async function checkUser() {
        try {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    setLoggedIn(true);
                    setUserId(user.uid);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function likeSong(songid) {
        try {
            const likesDocRef = doc(db, "likes", userId);
            // Check if the document exists
            const docSnap = await getDoc(likesDocRef);
            if (!docSnap.exists()) {
                await setDoc(likesDocRef, { songs: [songid] });
            } else {
                await updateDoc(likesDocRef, {
                    songs: arrayUnion(songid),
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function unlikeSong(songid) {
        const likedSongs = await getUserLikedSongs();
        const updatedLikedSongs = likedSongs.filter((id) => id !== songid);
        try {
            const res = await setDoc(doc(db, "likes", userId), {
                songs: updatedLikedSongs,
            });
            console.log(songid);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    async function getUserLikedSongs() {
        try {
            const docRef = doc(db, "likes", userId);
            const querySnapshot = await getDoc(docRef);
            const userLikedSongs = [];
            // console.log(querySnapshot.data().songs);
            userLikedSongs.push(...querySnapshot.data().songs);

            return userLikedSongs;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async function getSongsArray(songIdArr) {
        try {
            const songArr = [];
            for (const songId of songIdArr) {
                const docRef = doc(db, "audios", songId);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    data.songId = songId;
                    songArr.push(data);
                } else {
                    console.log(`Document with ID ${songId} does not exist.`);
                }
            }
            console.log(songArr);
            return songArr;
        } catch (err) {
            console.error("Error getting songs:", err);
            return [];
        }
    }

    function isLoading(set) {
        setLoading(set);
    }
    function switchTabs(tab) {
        setCurrentTab(tab);
    }
    function handleModal(msg) {
        setShowModal(true);
        setModalContent(msg);
        setTimeout(() => {
            setShowModal(false);
        }, 1500);
    }
    function handleSearch() {
        setShowSearch(true);
    }
    return (
        <AnimatePresence>
            {loading && <Loading />}
            {showModal && <Modal>{modalContent}</Modal>}
            {showSearch && <Search playOnTap={playOnTap} />}
            <motion.div
                key={"landing"}
                className={`px-5 font-poppins pb-2 ${loading && "hidden"}`}
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            >
                {currentTab === "home" && (
                    <motion.div
                        key={"landing2"}
                        initial={{ opacity: 0, y: "100vw" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                    >
                        <Navbar
                            handleSearch={handleSearch}
                            playOnTap={playOnTap}
                        />
                        <Carousel
                            songs={songsArray}
                            carouselSongs={carouselSongs}
                            playOnTap={playOnTap}
                        />
                        <Recommendations
                            active={activeTab}
                            setActive={handleTabs}
                            songs={songsArray}
                            recommendedSongs={recommendedSongs}
                            playOnTap={playOnTap}
                        />
                        <PlayNext songs={nextSongs} playOnTap={playOnTap} />
                    </motion.div>
                )}
                <audio ref={audioRef} className="hidden" src={audio}></audio>
                {currentTab === "likes" && (
                    <Likes
                        getUserLikedSongs={getUserLikedSongs}
                        getSongsArray={getSongsArray}
                        isLoading={isLoading}
                        playOnTap={playOnTap}
                    />
                )}
                {currentTab === "main" && (
                    <MainPlayer
                        mainPlayer={handleShowplayer}
                        handlePlayPause={handleAudioState}
                        isPlaying={isPlaying}
                        currentTime={currentTime}
                        totalTime={totalTime}
                        song={songsArray[currIndex]}
                        playNext={playNext}
                        playPrev={playPrev}
                        loggedIn={loggedIn}
                        modal={handleModal}
                        likeSong={likeSong}
                        getUserLikedSongs={getUserLikedSongs}
                        unlikeSong={unlikeSong}
                        switchTabs={switchTabs}
                    />
                )}
                {currentTab !== "main" && (
                    <BottomNav
                        mainPlayer={handleShowplayer}
                        handlePlayPause={handleAudioState}
                        isPlaying={isPlaying}
                        song={songsArray[currIndex]}
                        loggedIn={loggedIn}
                        switchTabs={switchTabs}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
}

export default Landing;
