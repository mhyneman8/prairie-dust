import React, { Component } from 'react';
import products from '../../products.json';
// import Cart from '../cart/cart';
import Navbar from '../navbar/navbar';
import SoapView from '../soap-view/soap-view';
import SoapCard from '../soap-card/soap-card';
import './store-view.css';



class StoreView extends Component {
    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = { 
            pageTitle: "Main",
            customersCount: 5,
            cart: [],
            total: 0,
            selectedSoap: null
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

    // setSelectedSoap(newSelectedSoap) {
    //     this.setState({
    //         selectedSoap: newSelectedSoap
    //     });
    // }

    render() {
        const { cart, total, selectedSoap } = this.state;

        if (selectedSoap) return <SoapView product={selectedSoap} addToCart={this.addToCart} />;
        
        return (
            <div className="main-view">
            <Navbar cart={cart} total={total} updateTotal={this.updateTotal} removeFromCart={this.removeFromCart} />
            
            <div className="cover-photo">
                <h3>BAR SOAP</h3>
                <h5>Keep your hands clean and safe.</h5>
            </div>

            <div className="grid">
            
            {products.map(product => {
                return (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={`Preview of ${product.title}`} />
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
                            ADD TO CART
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