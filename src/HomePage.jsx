import React from "react";
import MainHeader from "./Components/HeaderMain";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Contact from "./Components/Contact";

const HomePage = () => {
    return (
        <div className="home-page">
            <MainHeader />
            <HeroSection />
            <About />
            <Contact />
        </div>
    );
}


export default HomePage;