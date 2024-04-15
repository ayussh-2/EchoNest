function SongCard({ title, artist, bgCover, playOnTap, songId }) {
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <>
            <div
                className="flex flex-col bg-black text-white cursor-pointer rounded-lg p-3 md:p-5 transition duration-300 ease-in-out max-w-xs md:max-w-full md:pb-10 hover:bg-white active:scale-95 hover:text-black transform hover:scale-105"
                onClick={() => playOnTap(songId)}
            >
                <div
                    className="w-full h-40 md:h-64 rounded-md"
                    style={{
                        backgroundImage: bgCover,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="flex flex-col mt-2 px-1 md:mt-5">
                    <p className="font-bold overflow-hidden text-lg">
                        {limitedText(title, 3)}
                    </p>
                    <p className="font-light overflow-hidden text-base">
                        {limitedText(artist, 3)}
                    </p>
                </div>
            </div>
        </>
    );
}

export default SongCard;
