import logo from "../assets/logo.png";
function Navbar({ handleSearch }) {
    return (
        <>
            <div className="navbar flex items-center justify-between px-4 py-2">
                <button className="active:scale-110" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </button>
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt=""
                        className="w-20 h-20 md:w-32 md:h-32"
                    />
                    <span className="hidden md:block text-xl">EchoNest</span>
                </div>
                <button>
                    <i className="fa-solid fa-ellipsis-vertical ml-2 md:ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
                </button>
            </div>
        </>
    );
}

export default Navbar;
