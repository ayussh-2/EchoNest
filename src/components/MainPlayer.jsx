import PlayerHeader from "./PlayerHeader";
import AlbumCover from "./AlbumCover";
import MusicDetails from "./MusicDetails";
function MainPlayer() {
    return (
        <div className="py-10 px-5 font-poppins">
            <PlayerHeader />
            <AlbumCover />
            <MusicDetails />
        </div>
    );
}

export default MainPlayer;
