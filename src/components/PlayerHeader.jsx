function PlayerHeader() {
    return (
        <div className="flex items-center justify-between">
            <button className=" hover:opacity-75 duration-200 active:scale-90">
                <i class="fa-solid fa-circle-chevron-left text-2xl"></i>
            </button>
            Now Playing
            <button className="hover:opacity-75 duration-200 active:scale-90">
                <i class="fa-solid fa-ellipsis-vertical ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
            </button>
        </div>
    );
}

export default PlayerHeader;
