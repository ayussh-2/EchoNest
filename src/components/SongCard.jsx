import { motion } from "framer-motion";
function SongCard({ title, artist, bgCover }) {
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <>
            <div className="flex flex-col bg-black text-white rounded-lg p-3">
                <div
                    className="w-32 h-32 rounded-md"
                    style={{
                        backgroundImage: bgCover,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="flex flex-col mt-2 px-1">
                    <p className="font-bold overflow-hidden">
                        {limitedText(title, 3)}
                    </p>
                    <p className="font-light overflow-hidden">
                        {limitedText(artist, 3)}
                    </p>
                </div>
            </div>
        </>
    );
}

export default SongCard;
