import React, { useState, useEffect } from "react";

import SongCardHorizontal from "./SongCardHorizontal";

function Carousel({ carouselSongs, songs }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleSlide = () => {
        setCurrentCardIndex(
            (prevIndex) => (prevIndex + 1) % carouselSongs.length
        );
    };

    useEffect(() => {
        const interval = setInterval(handleSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {carouselSongs.map((songIndex) => {
                return (
                    <SongCardHorizontal
                        key={songIndex}
                        title={songs[songIndex].title}
                        artist={songs[songIndex].artist}
                        bgCover={songs[songIndex].bgCover}
                        url={songs[songIndex].url}
                        currentCardIndex={currentCardIndex}
                    />
                );
            })}
        </div>
    );
}

export default Carousel;
