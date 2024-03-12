import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Signup() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            className="contain relative"
        >
            <Link to="/">
                <button className="top-10 left-5 absolute hover:opacity-75 duration-200 active:scale-90">
                    <i class="fa-solid fa-circle-chevron-left text-2xl"></i>
                </button>
            </Link>
            <div className="flex items-center justify-center absolute top-3">
                <img src={logo} className="w-32 h-32" />
            </div>
            <div className="flex items-center justify-center flex-col ">
                <p className="text-3xl mb-20 font-semibold">Sign In!</p>
                <div className="flex flex-col items-center justify-center gap-5 my-5">
                    <input
                        type="email"
                        className="input-main"
                        placeholder="Enter Username or Email"
                    />
                    <input
                        type="password"
                        className="input-main"
                        placeholder="Enter Password"
                    />
                </div>
            </div>
            <button className="btn-main mt-5 w-full">Next</button>
            <div className="flex items-end justify-end">
                <Link to="/signup">
                    <button className="mt-5 hover:opacity-70 duration-200">
                        Create a new account?
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

export default Login;
