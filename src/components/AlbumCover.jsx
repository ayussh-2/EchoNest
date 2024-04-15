function AlbumCover({ albumCover }) {
    return (
        <div className="flex items-center justify-center mt-20 mb-20">
            <div
                className="w-72 h-72 md:h-96 md:w-96 md:scale-105 drop-shadow-2xl shadow-2xl rounded-md"
                style={{
                    backgroundImage: albumCover,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </div>
    );
}

export default AlbumCover;
