import logo from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import Modal from "../components/Modal";
import toast from "react-hot-toast";
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false);
    const [name, setName] = useState("");
    let navigate = useNavigate();

    async function createAccount() {
        if (email === "" || password === "" || name === "") {
            toast("Please fill in all the fields!");
            return;
        }
        setLoading(true);
        try {
            const userDetails = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userDetails.user;
            const nameUpdate = await updateProfile(userDetails.user, {
                displayName: name,
            });
            toast.success("Account Created!");
            setAccountCreated(true);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (accountCreated) {
                // window.location.href = "/login";
                navigate("/login");
            }
        }, 1700);
    }, [accountCreated]);

    return (
        <>
            {/* {loading && (
                <div className="flex fade items-center justify-center w-screen h-screen z-20 absolute bg-black bg-opacity-80">
                    {" "}
                    <PuffLoader color="#fff" />
                </div>
            )} */}
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                className="contain relative md:mt-10"
            >
                <Link to="/login">
                    <button className="top-10 left-5 absolute hover:opacity-75 duration-200 active:scale-90">
                        <i className="fa-solid fa-circle-chevron-left text-2xl"></i>
                    </button>
                </Link>
                <div className="flex items-center justify-center absolute top-0">
                    <img src={logo} className="w-32 h-32" />
                </div>
                <div className="flex items-center justify-center flex-col mt-20">
                    <p className="text-3xl mb-20 font-semibold">Sign Up!</p>
                    <div className="flex flex-col items-center justify-center gap-5 my-5">
                        <input
                            type="text"
                            className="input-main"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                    className="btn-main mt-5 w-auto flex items-center justify-center "
                    onClick={() => createAccount()}
                >
                    {loading ? (
                        <PuffLoader color="#fff" size={30} />
                    ) : (
                        <span className="fade">Sign Up</span>
                    )}
                </button>
            </motion.div>
        </>
    );
}

export default SignUp;
