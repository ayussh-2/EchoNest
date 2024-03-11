import { useState } from "react";
function MusicDetails() {
    const [liked, setLiked] = useState(false);
    function handleLike() {
        setLiked(!liked);
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-around px-5">
                <p className="text-3xl">Bad Guy</p>
                <p className="text-xl text-gray-500">Billie Eilish</p>
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
