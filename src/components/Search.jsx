import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SongList from "./SongList";

function Search({ playOnTap, songs }) {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async () => {
        const results = [];
        songs.forEach((song) => {
            if (song.title.toLowerCase().includes(searchInput.toLowerCase())) {
                results.push(song);
            }
        });
        // console.log(results);
        setSearchResults(results);
    };

    useEffect(() => {
        if (searchInput !== "") {
            handleSearch();
        }
    }, [searchInput]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-80 text-black p-10 flex items-center justify-center h-full w-screen z-20 absolute"
        >
            <div className="flex flex-col items-center justify-center bg-white p-10 w-full rounded-xl">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="rounded-2xl px-3 py-2 w-full border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-black duration-300 tracking-wider font-poppins"
                    placeholder="Search"
                />
                {/* <button onClick={handleSearch}>Search</button> */}

                {searchResults.length > 0 ? (
                    <div className="mt-5 h-[400px] overflow-x-hidden overflow-scroll rounded-3xl w-full">
                        {searchResults.map((song, index) => (
                            <SongList
                                key={index}
                                title={song.title}
                                artist={song.artist}
                                playOnTap={playOnTap}
                                songId={song.songId}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="font-poppins mt-10">No Results found!</h1>
                )}
            </div>
        </motion.div>
    );
}

export default Search;
// title, artist, playOnTap, songId;
