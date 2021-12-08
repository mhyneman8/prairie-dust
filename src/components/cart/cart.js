import React, { Component } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            cart: this.props.cart,
        };
    }

    clearCart = () => {
        localStorage.clear();
    }

    render() { 
        const cart = this.state.cart;
        return (
            <div>
                {/* <h3>Added to your cart (
                    { Object.keys(cart).length} items )
                </h3> */}
                {(this.props.cart).length > 0 ? (
                this.props.cart.map ((cart, index) =>  
                    <div key={index} className="cart">
                        <h4>{cart.title}</h4>
                        <button
                            className="remove"
                            onClick={() => { this.props.removeFromCart(index)} }
                            >
                            Remove item 
                        </button>
                    </div>
                    
                )
                ) : (
                    <div>cart is empty</div>
                )}

                <h4 className="total">Cart Total 
                    ({ Object.keys(cart).length} items)
                    <span className="right">
                        ${localStorage.getItem('total')}
                    </span>
                </h4>
                <button className="add-item">
                   <Link className="link" to={"/checkout"}>
                    Checkout
                    </Link>
                </button>
                <button className="add-item" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    Continue Shopping
                </button>
                <button 
                    onClick={this.clearCart()}
                >
                    Empty cart
                </button>
            </div>
        );
    }
}

export default CartView;