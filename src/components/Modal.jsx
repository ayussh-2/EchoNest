import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center justify-center w-screen h-full z-20 bg-black bg-opacity-85 absolute`}
        >
            <div className="bg-white text-black w-full mx-5 rounded-xl p-10 relative flex flex-col items-center gap-10">
                <p className="text-center font-light font-poppins">
                    {children}
                </p>
            </div>
        </motion.div>
    );
}

export default Modal;
