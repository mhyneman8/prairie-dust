import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './checkout-view.css'

class CheckoutView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            cart: this.props.cart,
        };
    }

    render() {
        const subtotal = localStorage.getItem('total');
        const tax = localStorage.getItem('total') * .11;
        const total = (Number(subtotal) + Number(tax) + 6.00);
        return (
            <div className="checkout-view">
                checkout view

                {/* <h3>Checkout as a guest</h3>
                <input type="email" required placeholder="Email" />
                <button>Let's Go!</button> */}
                 {/*turn into accordian  to open shipping*/}


                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h3>Shipping Information</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="text" placeholder="Address" required />
                            <input type="text" placeholder="Phone Number" required />
                            <input type="email" placeholder="Email" required />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h3>Payment Information</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>Secure payment with credit card</p>
                            {/* insert cc pictures */}
                            <input type="text" placeholder="Card Number" required />
                            <input type="dropdown" placeholder="month **" required />
                            <input type="dropdown" placeholder="year ****" required />
                            <input type="text" placeholder="CVV" required />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h3>Review Order</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            {/* { this.props.cart.map ((cart, index) =>  
                                <div key={index} className="cart">
                                    <h4>{cart.title}</h4>
                                    <button
                                        className="remove"
                                        onClick={() => { this.props.removeFromCart(index)} }
                                        >
                                        Remove item 
                                    </button>
                                </div> 
                            )} */}
                            <div className="total-cont">
                                <p className="total">Subtotal</p>

                                <span className="price">${subtotal}</span>  
                            </div>
                            

                            <p className="total">Sales Tax</p>
                            <span className="price">${tax}</span>

                            <p className="total">Shipping</p>

                            {(this.props.total) > 30 ?
                                (
                                    <span className="price">$0</span>
                                ) :
                                (
                                    <span className="price">$6.00</span>
                                )
                            }
                            

                            <p className="total">Total</p>
                            {(this.props.total) > 30 ?
                                (
                                    <span>${(subtotal + tax)}</span>
                                ) :
                                (
                                    <span>${total}</span>
                                )
                            }
                            <button className="order">
                                Place Order
                            </button>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* <h3>Or Sign In</h3>
                <input type="email" required placeholder="Email" />
                <input type="password" required placeholder="Password" />
                <button>Sign In</button> */}
            </div>
        )
    }
}

export default CheckoutView;