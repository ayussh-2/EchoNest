import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function SignUp() {
    return (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            className="contain relative"
        >
            <Link to="/login">
                <button className="top-10 left-5 absolute hover:opacity-75 duration-200 active:scale-90">
                    <i class="fa-solid fa-circle-chevron-left text-2xl"></i>
                </button>
            </Link>
            <div className="flex items-center justify-center absolute top-3">
                <img src={logo} className="w-32 h-32" />
            </div>
            <div className="flex items-center justify-center flex-col mt-20">
                <p className="text-3xl mb-20 font-semibold">Sign Up!</p>
                <div className="flex flex-col items-center justify-center gap-5 my-5">
                    <input
                        type="text"
                        className="input-main"
                        placeholder="Enter Name"
                    />
                    <input
                        type="email"
                        className="input-main"
                        placeholder="Enter Email"
                    />
                    <input
                        type="password"
                        className="input-main"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button className="btn-main mt-5 w-full">Sign Up</button>
        </motion.div>
    );
}

export default SignUp;
