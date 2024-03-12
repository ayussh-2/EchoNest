function SongList({ title, artist }) {
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <li className="flex justify-between bg-gray-200 py-3 px-5 items-center rounded-xl my-2">
            <div className="flex flex-col">
                <p className="text-base">{limitedText(title, 3)}</p>
                <p className="text-sm">{limitedText(artist, 2)}</p>
            </div>
            <i className="fa-solid fa-circle-play text-2xl"></i>
        </li>
    );
}

export default SongList;
