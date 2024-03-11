import { motion } from "framer-motion";
import logo from "../assets/logo.png";
function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
            className="contain"
        >
            <img src={logo} alt="" className="fadePulse" />
            {/* <p className="text-xl ">Start listening here!</p>
            <div className="flex items-center justify-between gap-5 my-10">
                <button className="btn-main">Register</button>
                <button className="btn-main">Sign in</button>
            </div> */}
        </motion.div>
    );
}

export default Loading;
