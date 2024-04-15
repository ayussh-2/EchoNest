import { motion } from "framer-motion";
function SongCardHorizontal({
    title,
    artist,
    bgCover,
    currentCardIndex,
    songId,
    playOnTap,
    isMobile,
}) {
    function limitedText(title, limit) {
        if (title.length <= limit) {
            return title;
        } else {
            return title.substring(0, limit) + "...";
        }
    }

    return (
        <motion.div
            key={currentCardIndex}
            className="card my-10 carousel bg-black text-white rounded-3xl flex p-5 cursor-pointer w-full justify-between hover:shadow-2xl duration-500 hover:drop-shadow-2xl active:scale-95"
            onClick={() => playOnTap(songId)}
        >
            <div className=" px-2">
                <h1 className="text-3xl capitalize">
                    {isMobile() ? limitedText(title, 15) : title}
                </h1>
                <p className="text-sm uppercase">
                    {isMobile() ? limitedText(artist, 15) : artist}
                </p>
            </div>
            <div className="">
                <div className=" rounded-md">
                    <div
                        className="w-auto md:w-52 md:h-52 h-32 rounded-md"
                        style={{
                            backgroundImage: bgCover,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
            </div>
        </motion.div>
    );
}

export default SongCardHorizontal;
