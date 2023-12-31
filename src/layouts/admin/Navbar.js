import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Navbar = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidebar = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
    };

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });

    }

    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to="/admin">
                <img src="/logo512.png" alt="Logo" height="45" width="45" />
                SwiftShop
            </Link>
            <button
                className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                id="sidebarToggle"
                onClick={toggleSidebar}
            >
                <i className="fas fa-bars"></i>
            </button>

            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`} onClick={toggleDropdown}>
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={isOpen}>
                        <i className="fas fa-user fa-fw"></i>
                    </Link>
                    <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <Link className="dropdown-item" to="/login" onClick={logoutSubmit}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
