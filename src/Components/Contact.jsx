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
        <>
            <div className='bg-slate-500'>
                <div className='flex flex-row justify-between'>

                    {/* form container */}

                    <div className='flex flex-col items-center m-10 p-10 justify-between bg-red-600'>
                        <h2 className='font-semibold p-2 text-lg'>Message Us</h2>
                        <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className='m-2 p-1 rounded-md'
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className='m-2 p-1 rounded-md'
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className='h-16 rounded-xl m-2 p-2'
                            ></textarea>
                            <button type="submit" className='border-2 w- m-2 p-2 rounded-md bg-green-400'>Send</button>
                        </form>
                        {success && <p className="success-message">Message Sent Successfully</p>}
                    </div>

                    {/* social media container */}

                    <div className="flex items-center justify-between bg-blue-600 m-10 p-10">
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-lg'>Contact Details</h1>

                            {/* Email Support */}
                            <div className='flex flex-row m-4'>
                                <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="email" className="contact-icon" />
                                <p className='p-2'>support@qberi.com</p>
                            </div>

                            {/* Phone Support */}
                            <div className='flex flex-row m-4'>
                                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone" className="contact-icon" />
                                <p className='p-2'>1234567890</p>
                            </div>

                            {/* Location */}
                            <div className='flex flex-row m-4'>
                                <img src="https://img.icons8.com/ios-filled/50/000000/worldwide-location.png" alt="location" className="contact-icon" />
                                <p className='p-2'>123, ABC Street, XYZ City, Country</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <footer className='flex justify-center'>
                <p className="footer-text">Copyright @ RoxWealth 2024</p>
            </footer>
        </>
    );
};

export default Contact;
