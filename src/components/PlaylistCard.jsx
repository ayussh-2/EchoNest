function PlaylistCard({ title, mood, selectPlaylist, playlistId }) {
    return (
        <div
            className="card mt-5 bg-black text-white rounded-3xl flex p-5 cursor-pointer active:scale-90 duration-500"
            onClick={() => selectPlaylist(playlistId)}
        >
            <div className="w-2/3 flex flex-col justify-between items-start">
                <div className="flex items-center justify-between flex-col">
                    <p className="text-sm font-bold uppercase ">{title}</p>
                    <h1 className="text-3xl capitalize ">
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
            <div className="w-1/3">
                <div className="overflow-hidden">
                    <img
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-song-mixtape-album-cover-template-design-250a66b33422287542e2690b437f881b_screen.jpg?ts=1635176340"
                        className="w-32 h-32 rounded-md"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default PlaylistCard;
