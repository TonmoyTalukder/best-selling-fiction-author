import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="w-100">
                <div className="bg-light position-sticky w-100">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            {/* header title icon */}
                            <a className="navbar-brand ms-5 fs-1 fst-italic fw-lighter" href="google.com">Authors'...</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse me-5 d-flex justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex justify-content-end">
                                    {/* navbar manu */}
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 font-monospace active" aria-current="page" href="google.com">Home</a>
                                    </li>
                                    <li className="nav-item fs-4 font-monospace">
                                    <a className="nav-link" href="google.com">Authors</a>
                                    </li>
                                    <li className="nav-item fs-4 font-monospace">
                                    <a className="nav-link" href="google.com">Fictional Books</a>
                                    </li>
                                    <li className="nav-item fs-4 font-monospace">
                                    <a className="nav-link" href="google.com">Review</a>
                                    </li>
                                    <li className="nav-item fs-4 font-monospace">
                                    <a className="nav-link" href="google.com">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* header text */}
                    <div className="">
                        <nav className="bg-dark secondNav d-flex align-items-center justify-content-center flex-column p-5">
                            <h2 className="text-light fw-light">Best Selling Fiction Authors</h2>
                            <h3 className="text-light fw-light">Sell Budget=100000</h3>
                        </nav>
                     </div>
                </div>
        </div>
    );
};

export default Header;