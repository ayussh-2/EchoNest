function LyricsBtn({ handleLyrics }) {
    return (
        <div className="flex items-center justify-center">
            <button className="lyricBtn mt-10" onClick={handleLyrics}>
                <div className="flex flex-col items-center gap-2">
                    <i class="fa-solid fa-chevron-up text-sm"></i>
                    <p className="text-sm">LYRICS</p>
                </div>
            </button>
        </div>
    );
}

export default LyricsBtn;
