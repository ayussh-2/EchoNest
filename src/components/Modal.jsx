import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ children, isOpen }) {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    useEffect(() => {
        openModal();
    }, [isOpen]);

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`flex items-center justify-center w-screen h-screen z-20 bg-black bg-opacity-85 relative`}
                >
                    <div className="bg-white text-black rounded-xl p-10 relative flex flex-col items-center gap-10">
                        <p className="text-center font-light font-poppins">
                            {children}
                        </p>
                        <button
                            className="bg-black text-white rounded-lg px-6 py-2 hover:bg-opacity-80 active:scale-95 duration-200"
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            Ok
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
