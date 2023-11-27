import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between small">
                    <div className="text-muted mb-3 mb-md-0">Copyright &copy; Your Website 2023</div>
                    <div className="d-flex">
                        <Link to="#" className="mx-2 text-decoration-none text-muted">Privacy Policy</Link>
                        <span className="text-muted">&middot;</span>
                        <Link to="#" className="mx-2 text-decoration-none text-muted">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
