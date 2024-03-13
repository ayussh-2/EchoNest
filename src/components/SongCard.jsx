import { motion } from "framer-motion";
function SongCard({ title, artist, bgCover, play }) {
    function limitedText(title, limit) {
        const words = title.split(" ");
        const limitedTitle = words.slice(0, limit).join(" ");

        return words.length > limit ? `${limitedTitle} ...` : title;
    }
    return (
        <>
            <div
                className="flex flex-col bg-black text-white cursor-pointer rounded-lg p-3 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out"
                // onClick={play}
            >
                <div
                    className="w-auto h-32 rounded-md"
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
