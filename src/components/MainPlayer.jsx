import PlayerHeader from "./PlayerHeader";
import AlbumCover from "./AlbumCover";
import MusicDetails from "./MusicDetails";
import PlayerControls from "./PlayerContorls";
function MainPlayer() {
    return (
        <div className="py-10 px-5 font-poppins">
            <PlayerHeader />
            <AlbumCover />
            <MusicDetails />
            <PlayerControls />
        </div>
    );
}

export default MainPlayer;
