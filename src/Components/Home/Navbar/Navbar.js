import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link ms-5 text-dark" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5 text-dark" to="/review">Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5 text-dark" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5 text-dark" to="/">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5 text-dark" to="/contactUs">Contact Us</Link>
                            </li>
                            <button type="button" className="nav-link ms-5 btn btn-outline-danger button text-white" to="/login"> <Link to="/login"> login</Link></button>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;