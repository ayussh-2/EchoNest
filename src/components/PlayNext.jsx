import React from "react";
import SongList from "./SongList";

function PlayNext({ songs }) {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold">Playing Next</h1>
            <ol className="my-5">
                {songs.map((song, index) => (
                    <SongList
                        key={index}
                        title={song.title}
                        artist={song.artist}
                    />
                ))}
            </ol>
        </div>
    );
}

export default PlayNext;
