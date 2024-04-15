import { useState } from "react";
import BottomPlayer from "./BottomPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function BottomNav({
    mainPlayer,
    handlePlayPause,
    isPlaying,
    song,
    loggedIn,
    switchTabs,
    isMobile,
}) {
    const [showBottomPlayer, setShowBottomPlayer] = useState(true);
    function handleShowPlayer() {
        setShowBottomPlayer(!showBottomPlayer);
    }
    if (song === undefined) return null;

    return (
        <div className="md:px-20">
            <AnimatePresence>
                {showBottomPlayer && (
                    <BottomPlayer
                        showMainPlayer={mainPlayer}
                        musicState={handlePlayPause}
                        isPlaying={isPlaying}
                        title={song.title}
                        artist={song.artist}
                        switchTabs={switchTabs}
                        isMobile={isMobile}
                    />
                )}
                <motion.div
                    key={"bottomNav"}
                    initial={{ opacity: 0, y: "100vw" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                    className="flex items-center justify-between rounded-lg bg-black text-white py-5 px-5 md:px-10"
                >
                    <button
                        className="bottom-btn"
                        onClick={() => switchTabs("home")}
                    >
                        <i className="fa-solid fa-house hover:opacity-95 md:text-2xl"></i>
                        <span className="font-light hidden md:block">Home</span>
                    </button>
                    <button className="bottom-btn">
                        <i
                            className="fa-solid fa-play hover:opacity-95 md:text-2xl"
                            onClick={() => switchTabs("main")}
                        ></i>
                        <span className="font-light hidden md:block">
                            Player
                        </span>
                    </button>
                    <button
                        className="active:scale-125 duration-300"
                        onClick={() => switchTabs("likes")}
                    >
                        <i className="fa-solid fa-heart hover:text-red-500 duration-200 md:text-2xl"></i>
                        <span className="font-light hidden md:block">
                            Your Likes
                        </span>
                    </button>
                    <Link to={loggedIn ? "/logout" : "/login"}>
                        <button className="bottom-btn">
                            <i
                                className={`fa-solid fa-${
                                    loggedIn ? "right-from-bracket" : "user"
                                } md:text-2xl `}
                            ></i>
                            <span className="font-light hidden md:block">
                                {loggedIn ? "Logout" : "Login"}
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default BottomNav;
