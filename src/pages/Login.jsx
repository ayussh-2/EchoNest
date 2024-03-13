import logo from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    setPersistence,
    signInWithEmailAndPassword,
    browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import Modal from "../components/Modal";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    async function loginWithEmail() {
        if (email === "" || password === "") {
            setStatus("Please fill in all the fields!");
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 1500);
            return;
        }
        try {
            await setPersistence(auth, browserLocalPersistence);
            const userDetails = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(userDetails.user);
            window.location.href = "/";
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setStatus(errorMessage);
        }
    }

    return (
        <>
            <AnimatePresence>
                {showModal && <Modal>{status}</Modal>}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                className="contain relative"
            >
                <Link to="/">
                    <button className="top-10 left-5 absolute hover:opacity-75 duration-200 active:scale-90">
                        <i className="fa-solid fa-circle-chevron-left text-2xl"></i>
                    </button>
                </Link>
                <div className="flex items-center justify-center absolute top-0">
                    <img src={logo} className="w-32 h-32" />
                </div>
                <div className="flex items-center justify-center flex-col ">
                    <p className="text-3xl mb-20 font-semibold mt-10">
                        Sign In!
                    </p>
                    <div className="flex flex-col items-center justify-center gap-5 my-5">
                        <input
                            type="email"
                            className="input-main"
                            placeholder="Enter Username or Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-main"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="btn-main mt-5 w-full flex items-center justify-center "
                    onClick={() => loginWithEmail()}
                >
                    {loading ? (
                        <PuffLoader color="#fff" size={30} />
                    ) : (
                        <span className="fade">Next</span>
                    )}
                </button>

                <div className="flex items-end justify-end">
                    <Link to="/signup">
                        <button className="mt-5 hover:opacity-70 duration-200">
                            Create a new account?
                        </button>
                    </Link>
                </div>
            </motion.div>
        </>
    );
}

export default Login;
