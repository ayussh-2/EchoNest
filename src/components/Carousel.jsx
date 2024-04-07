import SongCardHorizontal from "./SongCardHorizontal";
function Carousel({ song, playOnTap }) {
    return (
        <div className="relative">
            <h2 className="font-bold text-xl capitalize mt-5">
                Currently Buzzing!
            </h2>
            {song && (
                <SongCardHorizontal
                    key={0}
                    title={song.title}
                    artist={song.artist}
                    bgCover={song.bgCover}
                    url={song.url}
                    currentCardIndex={0}
                    playOnTap={playOnTap}
                    songId={song.songId}
                />
            )}
        </div>
    );
}

export default Carousel;
