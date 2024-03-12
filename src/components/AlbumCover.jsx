function AlbumCover({ albumCover }) {
    return (
        <div className="flex items-center justify-center overflow-hidden mt-20 mb-10">
            <div
                className="w-72 h-72 rounded-md"
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
