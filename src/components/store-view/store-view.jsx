import React, { useContext } from 'react';
import products from '../../products';
// import Cart from '../cart/cart';
// import Navbar from '../navbar/navbar';
import SoapView from '../soap-view/soap-view';
import SoapCard from '../soap-card/soap-card';
import './store-view.css';
import CartContext from '../../context/cart/CartContext';


// class StoreView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.removeFromCart = this.removeFromCart.bind(this);
    //     this.state = { 
    //         cart: [],
    //         total: 0,
    //         selectedSoap: null
    //     }
    // };

    // componentDidMount() {
    //     const storedCart = localStorage.getItem('cart');
    //     const storedTotal = localStorage.getItem('total');
    //     if (storedCart !== null) {
    //         const parsedCart = JSON.parse(storedCart);
    //         this.setState({ cart: parsedCart });
    //     }
    //     if (storedTotal !== null) {
    //         const parsedTotal = JSON.parse(storedTotal);
    //         this.setState({ total: parsedTotal})
    //     }
    // }

    // addToCart = (product) => {
    //     const obj = {"image": product.image, "title": product.title, "price": product.price};
    //     let newCart = this.state.cart;
    //     newCart.push(obj);
    //     this.setState( { cart: newCart });
    //     const stringifiedCart = JSON.stringify(this.state.cart);
    //     localStorage.setItem('cart', stringifiedCart);

    //     alert(`${product.title} added to cart!`);
    //     this.updateTotal(product.price);
    // }

    // removeFromCart = (index) => {
    //     let itemPrice = this.state.cart[index].price;
    //     let newCart = [...this.state.cart];

    //     itemPrice = -Math.abs(itemPrice);

    //     newCart.splice(index, 1);
    //     this.setState({ cart: newCart });

    //     const stringifiedCart = JSON.stringify(newCart);
    //     localStorage.setItem('cart', stringifiedCart);

    //     this.updateTotal(itemPrice)
    //     alert(`${this.state.cart[index].title} removed from cart.`);
    // }

    // updateTotal = (price) => {
    //     const newTotal = parseInt(this.state.total) + parseInt(price);

    //     this.setState({ total: newTotal })
        
    //     const stringifiedTotal = JSON.stringify(newTotal);
    //     localStorage.setItem('total', stringifiedTotal);
    // }

    // setSelectedSoap(newSelectedSoap) {
    //     this.setState({
    //         selectedSoap: newSelectedSoap
    //     });
    // }
    const StoreView = () => {
    // render() {
        // const { cart, total, selectedSoap } = this.state;
        
        
        return (
            <div className="main-view">
            
            <div className="cover-photo">
                <h3>BAR SOAP</h3>
                <h5>Keep your hands clean and safe.</h5>
            </div>

            <div className="grid">
            
                {products.map((product) => (
                    <SoapCard key={product.id} product={product} />  
                ))} 
            </div>
        </div>   
        );
    }


export default StoreView;