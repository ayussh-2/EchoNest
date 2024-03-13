import { useEffect, useState } from "react";
function MusicDetails({
    title,
    artist,
    loggedIn,
    modal,
    songId,
    likeSong,
    getUserLikedSongs,
}) {
    const [userLikedSongs, setUserLikedSongs] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        async function fetchUserLikedSongs() {
            if (loggedIn) {
                const likedSongs = await getUserLikedSongs();
                setUserLikedSongs(likedSongs);
                console.log(likedSongs);
            }
        }

        fetchUserLikedSongs();
    }, [loggedIn, songId]);

    useEffect(() => {
        setLiked(userLikedSongs.includes(songId));
    }, [songId]);
    // const songIsLiked = userLikedSongs.includes(songId);

    function handleLike() {
        if (loggedIn) {
            likeSong(songId);
        } else {
            modal("Please login to like songs");
        }
    }
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");
        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-around px-5">
                    <p className="text-2xl">{limitedText(title, 1)}</p>
                    <p className="text-base text-gray-500">
                        {limitedText(artist, 1)}
                    </p>
                </div>
                <div>
                    <button className=" pr-2" onClick={() => handleLike()}>
                        <i
                            class={`fa-heart hover:text-red-500 duration-200 text-2xl active:scale-125 ${
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
