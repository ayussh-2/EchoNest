function SongList({ title, artist, playOnTap, songId }) {
    function limitedText(title, limit) {
        if (title.length <= limit) {
            return title;
        } else {
            return title.substring(0, limit) + "...";
        }
    }
    function isMobile() {
        return window.innerWidth <= 768;
    }
    return (
        <li
            className="flex justify-between bg-gray-200 py-3 px-5 items-center rounded-xl my-2 hover:cursor-pointer active:bg-black active:text-white transition duration-300 ease-in-out active:scale-105 md:py-5 md:my-3"
            onClick={() => playOnTap(songId)}
        >
            <div className="flex flex-col">
                <p className="text-base md:text-lg">
                    {isMobile() ? limitedText(title, 15) : title}
                </p>
                <p className="text-sm md:text-base">
                    {isMobile() ? limitedText(artist, 15) : artist}
                </p>
            </div>
            <i className="fa-solid fa-circle-play text-2xl"></i>
        </li>
    );
}

export default SongList;
