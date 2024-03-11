import React, { useState } from "react";
import { motion } from "framer-motion";
const BottomPlayer = ({ showMainPlayer }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [songName, setSongName] = useState("Song Name");
    const [artistName, setArtistName] = useState("Artist Name");

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            exit={{ opacity: 0, y: "100vw" }}
            className="flex items-center justify-between rounded-lg bg-black text-white p-5 mb-2"
            onClick={showMainPlayer}
        >
            <div className="song-info font-light">
                <h3 className="text-base">{songName}</h3>
                <p className="text-sm">{artistName}</p>
            </div>

            <button onClick={showMainPlayer}>
                <i
                    class={`fa-solid fa-circle-${
                        isPlaying ? "pause" : "play"
                    } text-2xl`}
                ></i>
                {}
            </button>
        </motion.div>
    );
};

export default BottomPlayer;
