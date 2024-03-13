import { useEffect, useState } from "react";

function MusicDetails({
    title,
    artist,
    loggedIn,
    modal,
    songId,
    likeSong,
    getUserLikedSongs,
    unlikeSong,
}) {
    const [userLikedSongs, setUserLikedSongs] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        async function fetchUserLikedSongs() {
            if (loggedIn) {
                const likedSongs = await getUserLikedSongs();
                setUserLikedSongs(likedSongs);
            }
        }

        fetchUserLikedSongs();
    }, [loggedIn, songId]);

    useEffect(() => {
        setLiked(userLikedSongs.includes(songId));
    }, [userLikedSongs, songId]);

    function handleLike() {
        if (loggedIn) {
            if (userLikedSongs.includes(songId)) {
                unlikeSong(songId);
                setLiked(false);
            } else {
                likeSong(songId);
                setLiked(true);
            }
        } else {
            modal("Please login to like songs");
        }
    }

    function limitedText(title, limit) {
        if (title.length <= limit) {
            return title;
        } else {
            return title.substring(0, limit) + "...";
        }
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-around px-5">
                    <p className="text-2xl">{limitedText(title, 15)}</p>
                    <p className="text-base text-gray-500">
                        {limitedText(artist, 12)}
                    </p>
                </div>
                <div>
                    <button className="pr-2" onClick={() => handleLike()}>
                        <i
                            className={`fa-heart hover:text-red-500 duration-200 text-2xl active:scale-125 ${
                                liked ? "fa-solid text-red-500" : "fa-regular"
                            }`}
                        ></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default MusicDetails;
