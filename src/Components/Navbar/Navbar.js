import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor: "#FAE042"}}>
            <div className="container-fluid container">
                <Link className="navbar-brand logo-text fs-2" to="/">Cine Info</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3">
                            <Link className="nav-link navbar-link fs-5" to="/home">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link navbar-link fs-5" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link navbar-link fs-5" target="_blank" href="https://www.bioscopelive.com/bn/featured-tv">Live TV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;