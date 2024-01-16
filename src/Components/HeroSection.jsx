
import React from "react";

const HeroSection = () => {
    return (
        <div className="main-page">
            <div className="main-container">
                <div className="main-image">
                    <img src="./public/image2.jpeg" alt="main" />
                </div>
                <div className="main-text">
                    {/* introduction text */}
                    Welcome to 
                    <p className="main-text-2">RoxWealth</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;