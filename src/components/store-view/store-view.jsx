import React, { Component } from 'react';
import products from '../../products.json';
import Cart from '../cart/cart';

class StoreView extends Component {
    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = { 
            pageTitle: "Main",
            customersCount: 5,
            cart: [],
            total: 0
        }
    };

    componentDidMount() {
        const storedCart = localStorage.getItem('cart');
        const storedTotal = localStorage.getItem('total');
        if (storedCart !== null) {
            const parsedCart = JSON.parse(storedCart);
            this.setState({ cart: parsedCart });
        }
        if (storedTotal !== null) {
            const parsedTotal = JSON.parse(storedTotal);
            this.setState({ total: parsedTotal})
        }
    }

    addToCart = (product) => {
        const obj = {"image": product.image, "title": product.title, "price": product.price};
        let newCart = this.state.cart;
        newCart.push(obj);
        this.setState( { cart: newCart });
        const stringifiedCart = JSON.stringify(this.state.cart);
        localStorage.setItem('cart', stringifiedCart);

        alert(`${product.title} added to cart!`);
        this.updateTotal(product.price);
    }

    removeFromCart = (index) => {
        let itemPrice = this.state.cart[index].price;
        let newCart = [...this.state.cart];

        itemPrice = -Math.abs(itemPrice);

        newCart.splice(index, 1);
        this.setState({ cart: newCart });

        const stringifiedCart = JSON.stringify(newCart);
        localStorage.setItem('cart', stringifiedCart);

        this.updateTotal(itemPrice)
        alert(`${this.state.cart[index].title} removed from cart.`);
    }

    updateTotal = (price) => {
        const newTotal = parseInt(this.state.total) + parseInt(price);

        this.setState({ total: newTotal })
        
        const stringifiedTotal = JSON.stringify(newTotal);
        localStorage.setItem('total', stringifiedTotal);
    }


    render() {
        const cart = this.state.cart;
        const total = this.state.total;
        
    return (
        <div className="main-view">
            <h1 className="border-bottom text-center m-1 p-1">
                {this.state.pageTitle}
            
                <span className="badge badge-secondary m-2">
                    {this.state.customersCount}
                </span>
            </h1>

            <div className="container-fluid">
                <a className="navbar-brand" href="#/">Shopping Cart</a>
                <button className="navbar-toggler btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            
                    Cart (
                    { Object.keys(this.state.cart).length }
                    )
                
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    
                    <Cart cart={cart} total={total} removeFromCart={this.removeFromCart}/>

                </div>
                </div>
            </div>

            <div className="grid">
            
            {products.map(product => {
                return (
                    <div key={product.id} className="card">
                        {/* <img src={product.image} alt={`Preview of ${product.title}`} /> */}
                        <h3>{ product.title }</h3>
                        {/* <p>{ product.description }</p>
                        <p>{ product.size }</p> */}
                        <p>${ product.price }</p>

                        <button
                            className="add-item"
                            data-item-id={product.id}
                            data-item-image={product.image}
                            data-item-name={product.title}
                            data-item-url="/"
                            data-item-price={product.price}
                            onClick={() => { this.addToCart(product)}}
                        >  
                            Add to Cart
                        </button>
                    </div>
                ); 
            })} 
            </div>
        </div>  
    );
    }
}

export default StoreView;