import React from "react";
import SongList from "./SongList";

function PlayNext({ songs, playOnTap, isMobile }) {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold">Playing Next</h1>
            <ol className="my-5">
                {songs.map((song, index) => (
                    <SongList
                        key={index}
                        title={song.title}
                        artist={song.artist}
                        playOnTap={playOnTap}
                        songId={song.songId}
                        isMobile={isMobile}
                    />
                ))}
            </ol>
        </div>
    );
}

export default PlayNext;
