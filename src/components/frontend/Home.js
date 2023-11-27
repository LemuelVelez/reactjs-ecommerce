import React from "react";
import "./Home.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import footer_logo from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png';
import pintester_icon from '../../assets/pintester_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to SwiftShop</h1>
            </header>
            <section className="main-content">
                <h2>Please Go to Collections to View our Products</h2>
                <Link className="nav-link" to="/collections">
                    <div className="footer-logo">
                        <img src={footer_logo} alt="" />
                        <p>Click Me!</p>
                    </div>
                </Link>

            </section>

            <footer className="footer">
                <div className='footer'>

                    <div className="footer-social-icon">
                        <div className="footer-icons-container">
                            <img src={instagram_icon} alt="" />
                        </div>
                        <div className="footer-icons-container">
                            <img src={pintester_icon} alt="" />
                        </div>
                        <div className="footer-icons-container">
                            <img src={whatsapp_icon} alt="" />
                        </div>
                    </div>
                    <p>&copy; copyright 2023 SwiftShop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
