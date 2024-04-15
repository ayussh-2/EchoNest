import React, { useState } from "react";
import { motion } from "framer-motion";
function BottomPlayer({
    showMainPlayer,
    musicState,
    isPlaying,
    title,
    artist,
    switchTabs,
    isMobile,
}) {
    const handlePlayPause = () => {
        musicState();
    };
    function limitedText(title, limit) {
        if (title.length <= limit) {
            return title;
        } else {
            return title.substring(0, limit) + "...";
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            exit={{ opacity: 0, y: "100vw" }}
            className="flex items-center justify-between rounded-lg bg-black text-white p-5 mb-2 cursor-pointer py-5"
        >
            <div
                className="song-info font-light"
                onClick={() => switchTabs("main")}
            >
                <h3 className="text-base md:text-lg">
                    {isMobile() ? limitedText(title, 20) : title}
                </h3>
                <p className="text-sm md:text-base">
                    {isMobile() ? limitedText(artist, 18) : artist}
                </p>
            </div>

            <button onClick={handlePlayPause}>
                <i
                    className={`fa-solid fa-circle-${
                        isPlaying ? "pause" : "play"
                    } text-2xl md:text-4xl`}
                ></i>
                {}
            </button>
        </motion.div>
    );
}

export default BottomPlayer;
