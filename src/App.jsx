import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loading from "./pages/Loading";
import AudioUploader from "./pages/AudioUploader";

const Home = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Player = lazy(() => import("./pages/Player"));
function App() {
    let location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Loading />}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/upload" element={<AudioUploader />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

export default App;
