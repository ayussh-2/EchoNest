import { useEffect, useState } from "react";
import SongList from "./SongList";

function Playlist({ getSongsArray, isLoading, playOnTap, playlist }) {
    const [songs, setSongs] = useState([]);
    async function getLikedSongs() {
        isLoading(true);
        try {
            const songIds = playlist.songs;
            // console.log(songIds);
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
        <div className="h-screen">
            <h1 className="font-bold text-3xl text-center mt-20">
                {playlist.title}
            </h1>
            <div className="contain">
                {/* <button className="btn-main" onClick={() => getLikedSongs()}>
                    fetch liked songs
                </button> */}

                {songs.length === 0 ? (
                    <div className="contain">
                        <h2 className="text-center font-light text-2xl my-20">
                            Looks like this playlist is empty!!
                        </h2>
                    </div>
                ) : (
                    <div className="w-full h-[600px] overflow-x-hidden overflow-scroll rounded-3xl">
                        {songs.map((song) => {
                            return (
                                <SongList
                                    title={song.title}
                                    artist={song.artist}
                                    playOnTap={playOnTap}
                                    songId={song.songId}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playlist;
