import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../cart/cart';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart,
            total: this.props.total
        }
    }

    render() {
        const cart = this.props.cart;
        const total = this.state.total;
        return (
            <nav className=" navbar  nav-view">
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
                        </ul>

                    </div>
                    <div className="container-fluid">
                        <button className="navbar-toggler btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            Cart (
                                { Object.keys(cart).length }
                                {/* { localStorage.getItem('cart').length } */}
                            )
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Shopping Cart</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <Cart cart={cart} total={total} removeFromCart={this.props.removeFromCart} updateTotal={this.props.updateTotal} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;