import AlbumCover from "../components/AlbumCover";
import MainPlayer from "../components/MainPlayer";
import MusicDetails from "../components/MusicDetails";
import PlayerHeader from "../components/PlayerHeader";
function Player() {
    return (
        <div className="py-10 px-5 font-poppins">
            <PlayerHeader />
            <AlbumCover />
            <MusicDetails />
        </div>
    );
}

export default Player;
