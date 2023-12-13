import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    <FontAwesomeIcon icon={faUser} /> Welcome to our capstone project! We are Lemuel, Kathleen, and Katrina, a team dedicated to building a simple yet effective e-commerce website.
                </p>
                <p>
                    <FontAwesomeIcon icon={faLaptopCode} /> Lemuel handles the technical backbone, focusing on creating a reliable and straightforward back-end experience.
                    <FontAwesomeIcon icon={faTools} /> Kathleen brings her creative touch, ensuring an easy and enjoyable user interface.
                    <FontAwesomeIcon icon={faLaptopCode} /> Katrina contributes her technical skills to the foundational aspects of our e-commerce functionality.
                </p>
                <p>
                    Our current project is a reflection of our skills at this stage, a simple e-commerce platform that serves as our capstone endeavor. While it may not be extravagant, it's a starting point for us to showcase what we've learned so far.
                </p>
                <p>
                    As we continue our journey, our goal is to enhance and refine our skills in the months and years to come. This capstone project is just the beginning, and we are excited to evolve and improve with each step.
                </p>
                <p>
                    Thank you for being part of our journey. Explore our basic e-commerce platform, and stay tuned for future updates as we grow and refine our skills in the world of web development.
                </p>
            </div>
        </div>
    );
}

export default About;
