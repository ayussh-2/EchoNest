import { useState } from "react";
import BottomPlayer from "./BottomPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function BottomNav({ mainPlayer, handlePlayPause, isPlaying }) {
    const [showBottomPlayer, setShowBottomPlayer] = useState(false);
    function handleShowPlayer() {
        setShowBottomPlayer(!showBottomPlayer);
    }
    return (
        <>
            <AnimatePresence>
                {showBottomPlayer && (
                    <BottomPlayer
                        showMainPlayer={mainPlayer}
                        musicState={handlePlayPause}
                        isPlaying={isPlaying}
                    />
                )}
                {/* <BottomNav /> */}

                <motion.div
                    initial={{ opacity: 0, y: "100vw" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                    className="flex items-center justify-between rounded-lg bg-black text-white py-5 px-5"
                >
                    <button className="bottom-btn">
                        <i class="fa-solid fa-house hover:opacity-95 "></i>
                    </button>
                    <button className="bottom-btn">
                        <i
                            class="fa-solid fa-play hover:opacity-95 "
                            onClick={() => handleShowPlayer()}
                        ></i>
                    </button>
                    <button className="bottom-btn">
                        <i class="fa-solid fa-heart hover:text-red-600 duration-200"></i>
                    </button>
                    <Link to={"/login"}>
                        <button className="bottom-btn">
                            <i class="fa-solid fa-user "></i>
                        </button>
                    </Link>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default BottomNav;
