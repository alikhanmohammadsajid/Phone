import React from 'react';
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
                                <a class="nav-link ms-5 text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-dark" href="#">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-dark" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-dark" href="#">Admin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-dark" href="#">Contact Us</a>
                            </li>
                            <button type="button" className="nav-link ms-5 btn btn-outline-danger button text-white">login</button>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;