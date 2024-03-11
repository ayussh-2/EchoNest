import { useState } from "react";
import { motion } from "framer-motion";
import PlayerHeader from "./PlayerHeader";
import AlbumCover from "./AlbumCover";
import MusicDetails from "./MusicDetails";
import PlayerControls from "./PlayerContorls";
import Lyrics from "./Lyrics";
import LyricsBtn from "./LyricsBtn";
function MainPlayer() {
    const [showLyrics, setShowLyrics] = useState(false);
    function toggleLyrics() {
        setShowLyrics((prev) => !prev);
    }
    return (
        <div className="py-10 px-5 font-poppins">
            <PlayerHeader />
            <AlbumCover />
            <MusicDetails />
            <PlayerControls />
            {/* <Lyrics show={showLyrics} />
            {showLyrics && <p>showing lyrics</p>}
            <LyricsBtn handleLyrics={toggleLyrics} /> */}
        </div>
    );
}

export default MainPlayer;
