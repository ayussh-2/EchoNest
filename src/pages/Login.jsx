import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import {
    setPersistence,
    signInWithEmailAndPassword,
    browserLocalPersistence,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";
import toast from "react-hot-toast";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function loginWithEmail() {
        if (email === "" || password === "") {
            toast("Please fill in all the fields!");
            return;
        }
        try {
            setLoading(true);
            await setPersistence(auth, browserLocalPersistence);
            const userDetails = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // console.log(userDetails.user);

            navigate("/");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    async function loginWithGoogle() {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            await setPersistence(auth, browserLocalPersistence);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user, token);
            navigate("/");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            let email = "";
            if (error.customData && error.customData.email) {
                email = error.customData.email;
            }
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: "100vw" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
                className="contain relative md:mt-10"
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

                <div className="flex items-center justify-between gap-5">
                    <button
                        className="btn-main mt-5 w-auto flex items-center justify-center "
                        onClick={loginWithEmail}
                    >
                        {loading ? (
                            <PuffLoader color="#fff" size={30} />
                        ) : (
                            <span className="fade">Login</span>
                        )}
                    </button>

                    <button
                        className="btn-main mt-5 w-auto flex items-center justify-center "
                        onClick={loginWithGoogle}
                    >
                        {loading ? (
                            <PuffLoader color="#fff" size={30} />
                        ) : (
                            <span className="fade">
                                Login with <i class="fa-brands fa-google"></i>
                            </span>
                        )}
                    </button>
                </div>
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
