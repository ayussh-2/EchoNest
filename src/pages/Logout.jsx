import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import Loading from "./Loading";
function Logout() {
    const [loggedOut, setLoggedOut] = useState(false);
    async function logoutUser() {
        try {
            await signOut(auth);
            setLoggedOut(true);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        logoutUser();
    }, []);
    return loggedOut ? (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            className="contain"
        >
            <h1 className="text-3xl font-bold text-center">
                You have been logged out!
            </h1>
            <div className="flex items-center justify-between gap-5 mt-10">
                <Link to="/login">
                    <button className="btn-main">Login!</button>
                </Link>

                <Link to="/">
                    <button className="btn-main">Home</button>
                </Link>
            </div>
        </motion.div>
    ) : (
        <Loading />
    );
}

export default Logout;
