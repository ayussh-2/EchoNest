import { motion, AnimatePresence } from "framer-motion";
function SongCardHorizontal({ title, artist, bgCover, currentCardIndex }) {
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <motion.div
            key={currentCardIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="card my-10 bg-black text-white rounded-3xl flex p-5"
        >
            <div className="w-2/3 px-2">
                {/* <p className="text-sm font-bold uppercase">{card.category}</p> */}
                <h1 className="text-3xl capitalize">{limitedText(title, 2)}</h1>
                <p className="text-sm uppercase">{limitedText(artist, 3)}</p>
            </div>
            <div className="w-1/3">
                <div className="overflow-hidden rounded-md">
                    <div
                        className="w-32 h-32 rounded-md"
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
