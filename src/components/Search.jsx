import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import SongList from "./SongList";
import { db } from "../firebase/config";
function Search({ playOnTap }) {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        // console.log("searching");
        try {
            const audiosRef = collection(db, "audios");
            const querySnapshot = await getDocs(audiosRef);
            const results = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (searchInput !== "") {
                    if (
                        data.title
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                    ) {
                        results.push(data);
                    }
                }
            });
            console.log(results);
            setSearchResults(results);
        } catch (error) {
            console.error("Error searching for songs:", error);
        }
    };

    useEffect(() => {
        if (searchInput !== "") {
            handleSearch();
        }
    }, [searchInput]);
    return (
        <div className="bg-black bg-opacity-50 text-black p-10 flex items-center justify-center h-full w-screen z-20 absolute">
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
                    <div className="mt-5 w-full">
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
        </div>
    );
}

export default Search;
// title, artist, playOnTap, songId;
