import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import footerLogo from '../../assets/logo_big.png';
import "./Home.css";

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
                        <img src={footerLogo} alt="" />
                        <p>Click Me!</p>
                    </div>
                </Link>
            </section>
        </div>
    );
}

export default Home;
