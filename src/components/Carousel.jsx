import SongCardHorizontal from "./SongCardHorizontal";
function Carousel({ song, playOnTap, isMobile }) {
    return (
        <div className="relative">
            <h2 className="text-xl md:text-2xl capitalize mt-5">
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
                    isMobile={isMobile}
                />
            )}
        </div>
    );
}

export default Carousel;
