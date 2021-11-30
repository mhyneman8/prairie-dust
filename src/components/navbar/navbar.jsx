import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
        return (
            <div className="nav-view">
                <div className="container">
                    <h1>Prairie Dust</h1>
                    <h3>Homemade Soap</h3> 

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                                <span className="sr-only">(current)</span>
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
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

export default Navbar;