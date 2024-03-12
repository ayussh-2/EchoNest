import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import Modal from "../components/Modal";
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("");

    async function createAccount() {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setStatus("Account Created!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setStatus(errorMessage);
            })
            .finally(() => {
                setLoading(false);
                setShowModal(true);
            });
    }

    return (
        <>
            <Modal isOpen={showModal}>{status}</Modal>
            {loading && (
                <div className="flex fade items-center justify-center w-screen h-screen z-20 absolute bg-black bg-opacity-80">
                    {" "}
                    <PuffLoader color="#fff" />
                </div>
            )}
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                className="contain relative "
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
                        {/* <input
                        type="text"
                        className="input-main"
                        placeholder="Enter Name"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    /> */}
                        <input
                            type="email"
                            className="input-main"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-main"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="btn-main mt-5 w-full"
                    onClick={() => createAccount()}
                >
                    Sign Up
                </button>
            </motion.div>
        </>
    );
}

export default SignUp;
