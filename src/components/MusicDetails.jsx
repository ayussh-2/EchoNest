import { useState } from "react";
function MusicDetails({ title, artist }) {
    const [liked, setLiked] = useState(false);
    function handleLike() {
        setLiked(!liked);
    }
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
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
    );
}

export default MusicDetails;
