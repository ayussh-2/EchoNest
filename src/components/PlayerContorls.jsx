function PlayerControls({
    musicState,
    currentTime,
    totalTime,
    isPlaying,
    playNext,
    playPrev,
}) {
    function handleMusicState() {
        musicState();
    }
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    const calculateBallPosition = () => {
        return (currentTime / totalTime) * 100;
    };

    return (
        <div className="mt-10 rounded-lg w-full">
            <div className="mt-5 mb-10">
                <div className="flex items-center justify-between">
                    <p className="text-sm">{formatTime(currentTime)}</p>
                    <p className="text-sm">{formatTime(totalTime)}</p>
                </div>
                <div className="bg-gray-500 my-5 w-full h-2 rounded-full flex items-center">
                    <div
                        className="bg-black h-2 text-xs rounded-full"
                        style={{ width: `${calculateBallPosition()}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <button onClick={playPrev}>
                    <i className="fa-solid fa-backward text-black"></i>
                </button>
                <button onClick={() => handleMusicState()}>
                    <i
                        className={`bg-black rounded-full fa-solid fa-${
                            isPlaying ? "pause" : "play"
                        } text-white px-5 py-4`}
                    ></i>
                </button>
                <button onClick={playNext}>
                    <i class="fa-solid fa-forward text-black"></i>
                </button>
            </div>
        </div>
    );
}

export default PlayerControls;
