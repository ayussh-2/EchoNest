function PlaylistCard({ title, mood, selectPlaylist, playlistId }) {
    return (
        <div
            className="card mt-5 bg-black text-white rounded-3xl flex p-5 cursor-pointer active:scale-90 duration-500"
            onClick={() => selectPlaylist(playlistId)}
        >
            <div className="flex flex-col items-start justify-between w-full">
                <div className="flex items-start justify-between flex-col">
                    <p className="text-sm md:text-base font-bold uppercase ">
                        {title}
                    </p>
                    <h1 className="text-3xl md:text-4xl capitalize ">
                        Feel{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600-gradient-to-r  via-green-500 to-indigo-400">
                            {mood}
                        </span>
                    </h1>
                </div>
                {/* <button className="text-sm uppercase hover:opacity-40 duration-200">
                    Save to playlists
                </button> */}
            </div>
            <div className="">
                <div className="overflow-hidden">
                    <img
                        src={`https://picsum.photos/200/300?random=${playlistId}`}
                        className="w-32 h-32 md:h-52 md:w-52 rounded-md"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default PlaylistCard;
