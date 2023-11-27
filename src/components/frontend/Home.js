import React from "react";
import "./Home.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to SwiftShop</h1>
            </header>
            <section className="main-content">
                <h2>Please Go to Collections to View our Products</h2>
                <Link className="nav-link" to="/collections">
                    <div className="sb-nav-link-icon"><i className="fas fa-folder-plus"></i></div>
                    Click Me!
                </Link>

            </section>
            <footer className="footer">
                <p>&copy; copyright 2023 SwiftShop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
