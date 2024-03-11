import { motion, AnimatePresence } from "framer-motion";
function Lyrics({ handleLyrics }) {
    const style = {
        backgroundImage: "url(https://source.unsplash.com/1600x900/?music)",
    };
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                style={style}
            >
                <div className="flex justify-between items-center">
                    <button onClick={handleLyrics}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <p className="text-xl">Bad Guy</p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Lyrics;
