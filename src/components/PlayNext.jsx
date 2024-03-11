function PlayNext() {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold">Playing Next</h1>
            <ol className=" my-5">
                <li className="flex justify-between bg-gray-200 py-3 px-5 items-center rounded-xl my-2">
                    <div className="flex flex-col">
                        <p className="text-base">Drag Me Down</p>
                        <p className="text-sm">One Direction</p>
                    </div>
                    <i className="fa-solid fa-circle-play text-2xl"></i>
                </li>
                <li className="flex justify-between bg-gray-200 py-3 px-5 items-center rounded-xl my-2">
                    <div className="flex flex-col">
                        <p className="text-base">Drag Me Down</p>
                        <p className="text-sm">One Direction</p>
                    </div>
                    <i className="fa-solid fa-circle-play text-2xl"></i>
                </li>
                <li className="flex justify-between bg-gray-200 py-3 px-5 items-center rounded-xl my-2">
                    <div className="flex flex-col">
                        <p className="text-base">Drag Me Down</p>
                        <p className="text-sm">One Direction</p>
                    </div>
                    <i className="fa-solid fa-circle-play text-2xl"></i>
                </li>
            </ol>
        </div>
    );
}

export default PlayNext;
