import logo from "../assets/logo.png";
import { useState } from "react";
function Landing() {
    const [activeTab, setActiveTab] = useState("recomm");
    return (
        <div className="px-5 font-poppins relative">
            <div className="navbar flex items-center justify-between">
                <i class="fa-solid fa-magnifying-glass text-xl"></i>
                <div className="flex items-center mx-10">
                    <img src={logo} alt="" className="w-20 h-20" />
                    <p>Echo Nest</p>
                </div>
                <i class="fa-regular fa-circle-user ml-5 text-xl hover:drop-shadow-xl duration-100"></i>
            </div>
            <div className="card my-10 bg-black text-white rounded-3xl flex p-5">
                <div className="w-2/3">
                    <p className="text-sm font-bold">NEW ALBUM</p>
                    <h1 className="text-3xl">Happier Than Ever!</h1>
                    <p className="text-sm">BILLIE EILISH</p>
                </div>
                <div className="w-1/3">
                    <div className="overflow-hidden  ">
                        <img
                            src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                            className="w-32 h-32 rounded-md"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-around gap-5 px-5">
                <button
                    className={`landingLinks hover-underline-animation ${
                        activeTab === "recomm"
                            ? "border-b-2 border-b-black"
                            : ""
                    }`}
                    onClick={() => setActiveTab("recomm")}
                >
                    Recommended
                </button>
                <button
                    className={`landingLinks hover-underline-animation ${
                        activeTab === "playlists"
                            ? "border-b-2 border-b-black"
                            : ""
                    }`}
                    onClick={() => setActiveTab("playlists")}
                >
                    Playlists
                </button>

                <button
                    className={`landingLinks hover-underline-animation ${
                        activeTab === "favourites"
                            ? "border-b-2 border-b-black"
                            : ""
                    }`}
                    onClick={() => setActiveTab("favourites")}
                >
                    Favourites
                </button>
            </div>
            <div className="flex items-center justify-around gap-3 overflow-x-auto mt-10">
                <div className="flex flex-col bg-black text-white rounded-lg p-5">
                    <img
                        src="https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg"
                        className="w-32 h-32 rounded-md"
                        alt=""
                    />
                    <div className="flex flex-col mt-2 px-1">
                        <p className="font-bold">Silence</p>
                        <p className="font-light">Dj Khaled</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
