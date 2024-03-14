import logo from "../assets/logo.png";
function Navbar({ handleSearch }) {
    return (
        <div className="navbar flex items-center justify-between">
            <button className="active:scale-110" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </button>
            <div className="flex items-center">
                <img src={logo} alt="" className="w-20 h-20" />
            </div>
            <i className="fa-solid fa-ellipsis-vertical ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
        </div>
    );
}

export default Navbar;
