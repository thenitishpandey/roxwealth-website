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
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src="./src/assets/Logo.png" alt="logo" className="main-logo" />
                </div>
                <nav className="header-nav">
                    <a href="/" className="header-nav-item">
                        Home
                    </a>
                    <a href="#about" className="header-nav-item">
                        About
                    </a>
                    <a href="#contact" className="header-nav-item">
                        Contact
                    </a>
                </nav>
                <div className="header-btn">
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
