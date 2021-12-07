import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../cart/cart';
import './navbar.css';
import navMenu from '../../img/navMenu.png';
import cartIcon from '../../img/cartIcon.png';

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
            <nav className="navbar  nav-view">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Logo</h1>
                    <h3>Prairie Dust</h3> 
                    
                    <div className="cartIcon">
                        <button className="navbar-toggler btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            {/* Cart */}
                            <img src={cartIcon} alt="cart icon" width={20} />
                             <span className="cartCount">
                             (
                                { Object.keys(cart).length } 
                                {/* { localStorage.getItem('cart').length } */}
                            )
                            </span>
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

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><img  src={navMenu} alt="menu hamburger" width={50} /></span>
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
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;