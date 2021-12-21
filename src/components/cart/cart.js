// import React, { Component } from 'react';
import React, { useContext } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';


const CartView = () => {
    const { cartItems, removeItem, total } = useContext(CartContext);
// }
// class CartView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             total: this.props.total,
//             cart: this.props.cart,
//         };
//     }

    // clearCart = () => {
    //     localStorage.clear();
    // }

    // render() { 
    //     const cart = this.state.cart;
        return (
            <div>
                <h3>Added to your cart (
                    { cartItems.length} items )
                </h3>
                {cartItems.length > 0 ? (
                cartItems.map ((item) =>  
                    <div key={item.id} className="cart">
                        <h4>{item.title}</h4>
                        <button
                            className="remove"
                            onClick={() => { removeItem(item.id)} }
                            >
                            Remove item 
                        </button>
                    </div>
                    
                )
                ) : (
                    <div>cart is empty</div>
                )}

                <h4 className="total">Cart Total 
                    ({ cartItems.length} items)
                    <span className="right">
                        ${cartItems.reduce((amount, item) => Number(item.price) + Number(amount), 0)}
                        {/* ${localStorage.getItem('total')} */}
                    </span>
                </h4>

                {Number(total) < 30 ? ( 
                    <div  className="">
                        ${30 - localStorage.getItem('total')} away from free shipping!
                    </div>
                ) : (
                    <div>
                        You Qualify for free shipping!
                    </div>
                )}
                <Link className="" to={"/checkout"}>
                    <button className="add-item">
                        Checkout
                    </button>
                </Link>
                <button className="add-item" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    Continue Shopping
                </button>
                <button 
                    // onClick={this.clearCart()}
                >
                    Empty cart
                </button>
            </div>
        );
    }
// }

export default CartView;