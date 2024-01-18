import React from "react";

const About = () => {
    return (
        <div className="about mb-4 flex justify-center bg-slate-300" id="about">
            <div className="about-container flex flex-col p-5 m-5 bg-sky-200 rounded-md items-center justify-center w-8/9 h-screen shadow-xl">
                <h1 className="text-3xl font-bold ">About Us</h1>
                <div className='flex justify-center font-extrabold text-4xl m-10 text-green-700 '>
                    <p className="main-text-2">We are RoxWealth</p>
                </div>
                <p className="m-3 font-serif text-xl p-5">
                    Roxwealth LLC, a private hedge fund, combines financial expertise with a forward-thinking approach. With a commitment to innovation, we are expanding our presence online to provide enhanced accessibility and transparency to our clients.
                    <br /><br></br>
                    It is based on US and serves the clients across the globe.
                </p>
            </div>
        </div>
    );
};

export default About;