import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayerHeader from "./PlayerHeader";
import AlbumCover from "./AlbumCover";
import MusicDetails from "./MusicDetails";
import PlayerControls from "./PlayerContorls";
import Lyrics from "./Lyrics";
import LyricsBtn from "./LyricsBtn";
function MainPlayer({
    mainPlayer,
    handlePlayPause,
    isPlaying,
    currentTime,
    totalTime,
    song,
    playNext,
    playPrev,
}) {
    // const [showLyrics, setShowLyrics] = useState(false);
    // function toggleLyrics() {
    //     setShowLyrics((prev) => !prev);
    // }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                className="py-10  font-poppins"
            >
                <PlayerHeader goBack={mainPlayer} />
                <AlbumCover albumCover={song.bgCover} />
                <MusicDetails title={song.title} artist={song.artist} />
                <PlayerControls
                    musicState={handlePlayPause}
                    currentTime={currentTime}
                    totalTime={totalTime}
                    isPlaying={isPlaying}
                    playNext={playNext}
                    playPrev={playPrev}
                />
                {/* <Lyrics show={showLyrics} />
            {showLyrics && <p>showing lyrics</p>}
            <LyricsBtn handleLyrics={toggleLyrics} /> */}
            </motion.div>
        </AnimatePresence>
    );
}

export default MainPlayer;
