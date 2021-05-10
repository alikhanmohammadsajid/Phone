import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto nav">
                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-dark" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-dark" to="/dashboard/mobile">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-dark" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-dark" to="/contactUs">Contact Us</Link>
                            </li>
                            <button type="button" className="nav-link ms-5 btn btn-dark text-white"> <Link style={{ textDecoration: "none"}} to="/login"> login</Link></button>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;