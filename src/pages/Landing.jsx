import { useState } from "react";
import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Recommendations from "../components/Recommendations";
import PlayNext from "../components/PlayNext";
function Landing() {
    const [activeTab, setActiveTab] = useState("recomm");
    function handleTabs(tab) {
        setActiveTab(tab);
    }
    return (
        <motion.div
            className="px-5 font-poppins pb-2"
            initial={{ opacity: 0, y: "100vw" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
        >
            <Navbar />
            <Carousel />
            <Recommendations active={activeTab} setActive={handleTabs} />
            <PlayNext />
            <BottomNav />
        </motion.div>
    );
}

export default Landing;
