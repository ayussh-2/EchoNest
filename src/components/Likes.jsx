import { useEffect, useState } from "react";
import SongList from "./SongList";
import Modal from "./Modal";
function Likes({ getUserLikedSongs, getSongsArray, isLoading, playOnTap }) {
    const [songs, setSongs] = useState([]);
    async function getLikedSongs() {
        isLoading(true);
        try {
            const songIds = await getUserLikedSongs();
            console.log(songIds);
            const songArr = await getSongsArray(songIds);
            setSongs(songArr);
        } catch (err) {
            console.log(err);
            setSongs([]);
        } finally {
            isLoading(false);
        }
    }
    useEffect(() => {
        getLikedSongs();
    }, []);

    return (
        <div className="">
            <h1 className="font-bold text-3xl text-center mt-20">LIKED ONES</h1>
            <div className="my-10">
                {/* <button className="btn-main" onClick={() => getLikedSongs()}>
                    fetch liked songs
                </button> */}

                {songs.length === 0 ? (
                    <h2 className="text-center font-light text-2xl my-20">
                        You havent liked any song!!
                    </h2>
                ) : (
                    songs.map((song) => {
                        return (
                            <SongList
                                title={song.title}
                                artist={song.artist}
                                playOnTap={playOnTap}
                                songId={song.songId}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Likes;
