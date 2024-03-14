import { motion, AnimatePresence } from "framer-motion";
function SongCardHorizontal({
    title,
    artist,
    bgCover,
    currentCardIndex,
    songId,
    playOnTap,
}) {
    function limitedText(title, limit) {
        if (title.length <= limit) {
            return title;
        } else {
            return title.substring(0, limit) + "...";
        }
    }

    return (
        <div
            key={currentCardIndex}
            className="card my-10 carousel bg-black text-white rounded-3xl flex p-5 cursor-pointer hover:bg-gray-100 hover:text-black active:scale-105 transition duration-300 ease-in-out"
            onClick={() => playOnTap(songId)}
        >
            <div className="w-2/3 px-2">
                <h1 className="text-3xl capitalize">
                    {limitedText(title, 10)}
                </h1>
                <p className="text-sm uppercase">{limitedText(artist, 15)}</p>
            </div>
            <div className="w-1/3">
                <div className=" rounded-md">
                    <div
                        className="w-auto h-32 rounded-md"
                        style={{
                            backgroundImage: bgCover,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default SongCardHorizontal;
