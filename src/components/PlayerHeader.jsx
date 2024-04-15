function PlayerHeader({ switchTabs }) {
    return (
        <div className="flex items-center justify-between">
            <button
                className=" hover:opacity-75 duration-200 active:scale-90"
                onClick={() => switchTabs("home")}
            >
                <i class="fa-solid fa-circle-chevron-left text-2xl md:text-3xl"></i>
            </button>
            <p className="nd:text-xl text-lg">Now Playing</p>
            <button className="hover:opacity-75 duration-200 active:scale-90">
                <i class="fa-solid fa-ellipsis-vertical ml-5 text-xl hover:drop-shadow-xl duration-100 md:text-3xl"></i>
            </button>
        </div>
    );
}

export default PlayerHeader;
