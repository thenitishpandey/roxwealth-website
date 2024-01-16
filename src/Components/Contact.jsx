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
        <div className="contact">
            <div className="contact-container">
                <div className="message">
                    <h2 className="message-heading">Message Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                        />
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="textarea-field"
                        ></textarea>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                    {success && <p className="success-message">Message Sent Successfully</p>}
                </div>

                <div className="contact-details">
                    <h2 className="contact-details-heading">Contact Details</h2>
                    <div className="contact-info">
                        <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="email" className="contact-icon" />
                        <p className="contact-text">nitish@qberi.com</p>
                    </div>
                    <div className="contact-info">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone" className="contact-icon" />
                        <p className="contact-text">1234567890</p>
                    </div>
                    <div className="contact-info">
                        <img src="https://img.icons8.com/ios-filled/50/000000/worldwide-location.png" alt="location" className="contact-icon" />
                        <p className="contact-text">123, ABC Street, XYZ City, Country</p>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <p className="footer-text">Copyright @ RoxWealth 2024</p>
        </footer>
        </>
    );
};

export default Contact;
