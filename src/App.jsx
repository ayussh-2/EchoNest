import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loading from "./pages/Loading";

import NotFound from "./pages/NotFound";
import SearchModal from "./components/Search";
// import GenRandomPlaylists from "./pages/GenRandomPlaylists";
const Home = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Logout = lazy(() => import("./pages/Logout"));

function App() {
    let location = useLocation();
    const [isPhone, setIsPhone] = useState(false);
    function isMobile() {
        if (window.innerWidth <= 768) {
            setIsPhone(true);
        } else {
            setIsPhone(false);
        }
    }
    useEffect(() => {
        isMobile();
    }, []);
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<Loading />}>
                {isPhone ? (
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/search" element={<SearchModal />} />
                        {/* <Route
                            path="/randPlays"
                            element={<GenRandomPlaylists />}
                        /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                ) : (
                    <div class="flex flex-col items-center justify-center h-screen w-screen bg-gray-200">
                        <p class="font-light text-center text-3xl">
                            This works only on smartphones for now, but stay
                            tuned for updates!
                        </p>
                        <footer class="mt-8">
                            <a
                                href="https://github.com/ayussh-2/"
                                target="_blank"
                                class="text-blue-600 hover:text-blue-900 uppercase"
                            >
                                Contact Developer
                            </a>
                        </footer>
                    </div>
                )}
            </Suspense>
        </AnimatePresence>
    );
}

export default App;
