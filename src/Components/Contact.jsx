import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement logic to send the message
        console.log("Name:", formData.name);
        console.log("Email:", formData.email);
        console.log("Message:", formData.message);

        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
    };

    return (
        <div className="contact flex flex-row m-5 p-5 rounded-lg bg-gray-600" id="contact">
            <div className="w-1/2 bg-white p-8 rounded-lg">
                <h2 className="text-3xl mb-6 font-bold text-gray-800">Message Us</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-3 rounded border-2 border-gray-400 border-solid"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mb-3 rounded border-2 border-gray-400 border-solid"
                    />
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 mb-3 rounded border-2 border-gray-400 border-solid"
                    ></textarea>
                    <button type="submit" className="w-full p-3 text-white bg-green-700 rounded">
                        Send
                    </button>
                </form>
                {success && <p className="mt-4 text-green-700">Message Sent Successfully</p>}
            </div>

            <div className="w-1/2 bg-slate-200 p-8 rounded-lg text-xl">
                <h2 className="text-3xl mb-6 font-bold text-black">Contact Details</h2>
                <div className="flex mb-4">
                    <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="email" className="mr-3 size-9" />
                    <p className="text-black">support @qberi.com</p>
                </div>
                <div className="flex  mb-4">
                    <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone" className="mr-3 size-9" />
                    <p className="text-black">1234567890</p>
                </div>
                <div className="flex">
                    <img
                        src="https://img.icons8.com/ios-filled/50/000000/worldwide-location.png"
                        alt="location"
                        className="mr-3 size-9"
                    />
                    <p className="text-black">
                        5919 Wellington Rd.<br />
                        Boulder, Colorado,<br />
                        80301<br />
                        United States of America
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
