import logo from "../assets/logo.png";
function Navbar() {
    return (
        <div className="navbar flex items-center justify-between">
            <i class="fa-solid fa-magnifying-glass text-xl"></i>
            <div className="flex items-center mx-10">
                <img src={logo} alt="" className="w-20 h-20" />
                <p>Echo Nest</p>
            </div>
            <i class="fa-solid fa-ellipsis-vertical ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
        </div>
    );
}

export default Navbar;
