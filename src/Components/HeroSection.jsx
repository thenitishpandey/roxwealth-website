
import React from "react";

const HeroSection = () => {
    return (
        <div className=' bg-slate-300' id="home">
            <div>
                <div className='w-full h-screen bg-cover'>
                    <img className='w-full h-screen bg-cover bg-fixed' src="./image2.jpeg" alt="main" />
                </div>
                {/* <div className='absolute top-2/3 left-2/3 text-white text-3xl font-extrabold w-full h-screen'>
                    Welcome to RoxWealth
                </div> */}
            </div>
        </div>
    );
};

export default HeroSection;