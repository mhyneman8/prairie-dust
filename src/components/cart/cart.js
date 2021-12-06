import React, { Component } from 'react';

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            cart: this.props.cart,
        };
    }

    render() { 
        const cart = this.state.cart;
        return (
            <div>
                <h3>Your Cart = 
                    { Object.keys(cart).length} items
                </h3>
                {(this.props.cart).length > 0 ? (
                this.props.cart.map ((cart, index) =>  
                    <div key={index} className="cart">
                        <h4>{cart.title}</h4>
                        <button
                            onClick={() => { this.props.removeFromCart(index)} }
                            >
                            Remove item 
                        </button>
                    </div>
                    
                )
                ) : (
                    <div>cart is empty</div>
                )}

                <h4>Total: ${localStorage.getItem('total')}</h4>
                    
                <button>
                    Checkout
                </button>
                <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    Continue Shopping
                </button>
            </div>
        );
    }
}

export default CartView;