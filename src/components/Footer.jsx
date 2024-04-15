import logo from "../assets/logo.png";
function Footer() {
    return (
        <>
            <footer className="text-black hidden md:block">
                <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                            <div className="flex items-center">
                                <img
                                    src={logo}
                                    alt=""
                                    className="w-20 h-20 md:w-32 md:h-32"
                                />
                                <span className="hidden md:block text-xl">
                                    EchoNest
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a
                                href="https://www.github.com/ayussh-2"
                                className="font-poppins text-center my-5"
                            >
                                &copy; {new Date().getFullYear()} Created with
                                🤯 by Ayush
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="flex items-center justify-center md:hidden">
                <a
                    href="https://www.github.com/ayussh-2"
                    className="font-poppins text-center my-5"
                >
                    &copy; {new Date().getFullYear()} Created with 🤯 by Ayush
                </a>
            </footer>
        </>
    );
}

export default Footer;
