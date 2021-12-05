import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
        return (
            <nav className=" navbar navbar-expand-lg nav-view">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Prairie Dust</h1>
                    <h3>Homemade Soap</h3> 
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                                {/* <span className="sr-only">(current)</span> */}
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                {/* Cart {itemCount} */}
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }

export default Navbar;