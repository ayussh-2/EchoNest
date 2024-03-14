import logo from "../assets/logo.png";
import { useState } from "react";
function Navbar({ handleSearch, handleModal }) {
    return (
        <>
            <div className="navbar flex items-center justify-between">
                <button className="active:scale-110" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </button>
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-20 h-20" />
                </div>
                <button
                    onClick={() => {
                        handleModal("Crafted with ❤️ by Ayush");
                    }}
                >
                    <i className="fa-solid fa-ellipsis-vertical ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
                </button>
            </div>
        </>
    );
}

export default Navbar;
