import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
    let location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Loading />}>
                <Routes location={location}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/loading" element={<Loading />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

export default App;
