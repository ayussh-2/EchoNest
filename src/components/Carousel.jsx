import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
    {
        id: 1,
        category: "NEW RELEASE",
        title: "Blinding Lights",
        artist: "The Weeknd",
        imageSrc: "https://example.com/blinding-lights.jpg",
    },
    {
        id: 2,
        category: "FEATURED",
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        imageSrc: "https://example.com/watermelon-sugar.jpg",
    },
    {
        id: 3,
        category: "TOP CHARTS",
        title: "Levitating",
        artist: "Dua Lipa",
        imageSrc: "https://example.com/levitating.jpg",
    },
    {
        id: 4,
        category: "ALTERNATIVE",
        title: "Shy Away",
        artist: "Twenty One Pilots",
        imageSrc: "https://example.com/shy-away.jpg",
    },
];

const Carousel = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleSlide = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    useEffect(() => {
        const interval = setInterval(handleSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* <AnimatePresence> */}
            {cards.map(
                (card, index) =>
                    index === currentCardIndex && (
                        <motion.div
                            key={currentCardIndex}
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: "0%" }}
                            exit={{ opacity: 0, x: "-100%" }}
                            transition={{ duration: 1 }}
                            className="card my-10 bg-black text-white rounded-3xl flex p-5"
                        >
                            <div className="w-2/3">
                                <p className="text-sm font-bold uppercase">
                                    {card.category}
                                </p>
                                <h1 className="text-3xl capitalize">
                                    {card.title}
                                </h1>
                                <p className="text-sm uppercase">
                                    {card.artist}
                                </p>
                            </div>
                            <div className="w-1/3">
                                <div className="overflow-hidden">
                                    <img
                                        src={card.imageSrc}
                                        className="w-32 h-32 rounded-md"
                                        alt={`Album Cover ${index + 1}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )
            )}
            {/* </AnimatePresence> */}
        </div>
    );
};

export default Carousel;
