import { motion } from "framer-motion";
import SongCard from "./SongCard";
function Recommendations({
    active,
    setActive,
    recommendedSongs,
    songs,
    playOnTap,
}) {
    const artist = "";
    const title = "";
    // console.log(recommendedSongs);

    return (
        <div className="my-5">
            <div className="flex items-center justify-around gap-5 px-5 mb-10">
                <button
                    className={`landingLinks hover-underline-animation ${
                        active === "recomm" ? "border-b-2 border-b-black" : ""
                    }`}
                    onClick={() => setActive("recomm")}
                >
                    Recommended
                </button>
                <button
                    className={`landingLinks hover-underline-animation ${
                        active === "playlists"
                            ? "border-b-2 border-b-black"
                            : ""
                    }`}
                    onClick={() => setActive("playlists")}
                >
                    Playlists
                </button>

                <button
                    className={`landingLinks hover-underline-animation ${
                        active === "favourites"
                            ? "border-b-2 border-b-black"
                            : ""
                    }`}
                    onClick={() => setActive("favourites")}
                >
                    Favourites
                </button>
            </div>
            {active === "recomm" && (
                <motion.div
                    className="grid grid-cols-2 gap-3 overflow-x-hidden mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    {recommendedSongs.map((songIndex) => {
                        return (
                            <SongCard
                                key={songIndex}
                                title={songs[songIndex].title}
                                artist={songs[songIndex].artist}
                                bgCover={songs[songIndex].bgCover}
                                // url={songs[songIndex].url}
                                // play={playOnTap(songIndex)}
                            />
                        );
                    })}
                </motion.div>
            )}

            {active === "playlists" && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="card mt-5 bg-black text-white rounded-3xl flex p-5 cursor-pointer">
                        <div className="w-2/3 flex flex-col justify-between items-start">
                            <div>
                                <p className="text-sm font-bold uppercase ">
                                    ROMANCE
                                </p>
                                <h1 className="text-3xl capitalize ">
                                    Feel{" "}
                                    <span className="text-red-500">Loved</span>
                                </h1>
                            </div>
                            <button className="text-sm uppercase hover:opacity-40 duration-200">
                                Save to playlists
                            </button>
                        </div>
                        <div className="w-1/3">
                            <div className="overflow-hidden  ">
                                <img
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                    className="w-32 h-32 rounded-md"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5 bg-black text-white rounded-3xl flex p-5 cursor-pointer">
                        <div className="w-2/3 flex flex-col justify-between items-start">
                            <div>
                                <p className="text-sm font-bold uppercase ">
                                    ROMANCE
                                </p>
                                <h1 className="text-3xl capitalize ">
                                    Feel{" "}
                                    <span className="text-red-500">Loved</span>
                                </h1>
                            </div>
                            <button className="text-sm uppercase hover:opacity-40 duration-200">
                                Save to playlists
                            </button>
                        </div>
                        <div className="w-1/3">
                            <div className="overflow-hidden  ">
                                <img
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                    className="w-32 h-32 rounded-md"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5 bg-black text-white rounded-3xl flex p-5 cursor-pointer">
                        <div className="w-2/3 flex flex-col justify-between items-start">
                            <div>
                                <p className="text-sm font-bold uppercase ">
                                    ROMANCE
                                </p>
                                <h1 className="text-3xl capitalize ">
                                    Feel{" "}
                                    <span className="text-red-500">Loved</span>
                                </h1>
                            </div>
                            <button className="text-sm uppercase hover:opacity-40 duration-200">
                                Save to playlists
                            </button>
                        </div>
                        <div className="w-1/3">
                            <div className="overflow-hidden  ">
                                <img
                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                    className="w-32 h-32 rounded-md"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            {active === "favourites" && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 fav playlists my-10">
                        <div className="flex justify-between items-center mb-10">
                            <p className="">Favourite Playlists</p>
                            <button className="bg-black px-3 py-1 text-white rounded-xl text-sm hover:bg-opacity-80 active:scale-95 duration-200">
                                See More
                            </button>
                        </div>
                        <div className="playlists">
                            <div className="card mt-5 bg-black text-white rounded-3xl flex p-5">
                                <div className="w-2/3 flex flex-col justify-around">
                                    <p className="text-sm font-bold uppercase">
                                        ROMANCE
                                    </p>
                                    <h1 className="text-3xl capitalize ">
                                        Feel{" "}
                                        <span className="text-red-500">
                                            Loved
                                        </span>
                                    </h1>
                                </div>
                                <div className="w-1/3">
                                    <div className="overflow-hidden  ">
                                        <img
                                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                            className="w-20 h-20 rounded-md"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5 bg-black text-white rounded-3xl flex p-5">
                                <div className="w-2/3 flex flex-col justify-around">
                                    <p className="text-sm font-bold uppercase">
                                        ROMANCE
                                    </p>
                                    <h1 className="text-3xl capitalize ">
                                        Feel{" "}
                                        <span className="text-red-500">
                                            Loved
                                        </span>
                                    </h1>
                                </div>
                                <div className="w-1/3">
                                    <div className="overflow-hidden  ">
                                        <img
                                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                            className="w-20 h-20 rounded-md"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5 bg-black text-white rounded-3xl flex p-5">
                                <div className="w-2/3 flex flex-col justify-around">
                                    <p className="text-sm font-bold uppercase">
                                        ROMANCE
                                    </p>
                                    <h1 className="text-3xl capitalize ">
                                        Feel{" "}
                                        <span className="text-red-500">
                                            Loved
                                        </span>
                                    </h1>
                                </div>
                                <div className="w-1/3">
                                    <div className="overflow-hidden  ">
                                        <img
                                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                                            className="w-20 h-20 rounded-md"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 fav songs">
                        <div className="flex justify-between items-center mb-10">
                            <p className="">Favourite Songs</p>
                            <button className="bg-black px-3 py-1 text-white rounded-xl text-sm hover:bg-opacity-80 active:scale-95 duration-200">
                                See More
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <>
                                <div className="flex flex-col bg-black text-white rounded-lg p-3">
                                    <img
                                        src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                                        className="w-32 h-32 rounded-md"
                                        alt=""
                                    />
                                    <div className="flex flex-col mt-2 px-1">
                                        <p className="font-bold">Silence</p>
                                        <p className="font-light">Dj Khaled</p>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-black text-white rounded-lg p-3">
                                    <img
                                        src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                                        className="w-32 h-32 rounded-md"
                                        alt=""
                                    />
                                    <div className="flex flex-col mt-2 px-1">
                                        <p className="font-bold">Silence</p>
                                        <p className="font-light">Dj Khaled</p>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-black text-white rounded-lg p-3">
                                    <img
                                        src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                                        className="w-32 h-32 rounded-md"
                                        alt=""
                                    />
                                    <div className="flex flex-col mt-2 px-1">
                                        <p className="font-bold">Silence</p>
                                        <p className="font-light">Dj Khaled</p>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-black text-white rounded-lg p-3">
                                    <img
                                        src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                                        className="w-32 h-32 rounded-md"
                                        alt=""
                                    />
                                    <div className="flex flex-col mt-2 px-1">
                                        <p className="font-bold">Silence</p>
                                        <p className="font-light">Dj Khaled</p>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default Recommendations;
