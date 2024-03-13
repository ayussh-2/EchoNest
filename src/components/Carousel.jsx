import React, { useState, useEffect } from "react";
import SongCardHorizontal from "./SongCardHorizontal";

function Carousel({ songs, playOnTap }) {
    const random = Math.floor(Math.random() * songs.length);
    const [index, setIndex] = useState(random);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % songs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [songs.length]);

    if (songs.length === 0 || !songs[index]) {
        return null;
    }

    return (
        <div className="relative">
            <SongCardHorizontal
                key={index}
                title={songs[index].title}
                artist={songs[index].artist}
                bgCover={songs[index].bgCover}
                url={songs[index].url}
                currentCardIndex={index}
                playOnTap={playOnTap}
                songId={songs[index].songId}
            />
        </div>
    );
}

export default Carousel;
