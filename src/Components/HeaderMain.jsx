import React, { useState, useEffect } from "react";
import LoginSignup from "./LogInSignUp";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogged(true);
        }
    }, []);

    const handleAccountClick = () => {
        if (isLogged) {
            window.location.href = "/user";
        } else {
            setIsMenuOpen(true);
        }
    };

    return (
        <header className=''>
            <div className='flex flex-row bg-slate-300 justify-between'>
                <div className='w-40'>
                    <img src="./src/assets/Logo.png" alt="logo" />
                </div>
                <nav className='flex flex-row justify-start items-center text-lg'>
                    <a className='mx-10 rounded-md hover:bg-slate-400 px-4 py-2' href="/" >
                        Home
                    </a>
                    <a className='mx-10 rounded-md hover:bg-slate-400 px-4 py-2' href="#about" >
                        About
                    </a>
                    <a className='mx-10 rounded-md hover:bg-slate-400 px-4 py-2' href="#contact">
                        Contact
                    </a>
                </nav>
                <div className='flex justify-end items-center border-green-700 border-2 m-4 rounded-xl hover:bg-green-400 font-semibold bg-green-600'>
                    <button
                        className="text-white px-4 py-2 rounded focus:outline-none"
                        onClick={handleAccountClick}
                    >
                        {isLogged ? "My Account" : "Login / Signup"}
                    </button>
                </div>
            </div>
            <LoginSignup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
};

export default MainHeader;
