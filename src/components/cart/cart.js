import React, { Component } from 'react';

class CartView extends Component {
    constructor(props) {
            super(props);
            this.state = {
            total: this.props.total,
            cart: [],
        };
    }

    render() { 
        return (
            <div>
                <h3>Your Cart = 
                    { Object.keys(this.props.cart).length}
                </h3>
                {(this.props.cart).length > 0 ? (
                this.props.cart.map ((cart, index) =>  
                    <div key={index} className="cart">
                        <h4>{cart.title}</h4>
                        <button
                            // value={cart.id}
                            onClick={() => { this.props.removeFromCart(index)} }
                            
                            >
                                {/* {console.log(this.value)} */}
                            Remove item {cart.id}
                        </button>
                    </div>
                    
                )
                ) : (
                    <div>cart is empty</div>
                )}

                <h4>Total: ${this.props.total}</h4>
                    
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