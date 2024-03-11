function Carousel() {
    return (
        <div className="card my-10 bg-black text-white rounded-3xl flex p-5">
            <div className="w-2/3">
                <p className="text-sm font-bold uppercase ">NEW ALBUM</p>
                <h1 className="text-3xl capitalize ">Happier Than Ever!</h1>
                <p className="text-sm uppercase ">BILLIE EILISH</p>
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
    );
}

export default Carousel;
