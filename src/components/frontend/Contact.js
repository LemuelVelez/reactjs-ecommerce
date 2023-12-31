import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>Have questions or feedback? Reach out to us!</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message"></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
