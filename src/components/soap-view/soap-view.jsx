import React from 'react';
import Navbar from '../navbar/navbar';

class SoapView extends React.Component {
        
    render() {
        const { product, onBackClick,  } = this.props;
        return (
            <div className="soap-view">
                {/* <Navbar /> */}
                <div className="soap-img">
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                </div>
                <div className="soap-title">
                  <h3>{ product.title }</h3>  
                </div>
                <div className="soap-description">
                    <p>{ product.description }</p>
                </div>
                <div className="soap-size">
                    <p>{ product.size } oz.</p>
                </div>
                <div className="soap-ingredients">
                    <p>Contains: { product.ingredients.map((ingredients) => ingredients + " ") }</p>
                </div>
                <div className="soap-price">
                    <p>${ product.price }</p>
                </div>

                <button
                    className="add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                    onClick={this.props.addToCart(product)}
                >
                    Add to Cart
                </button>

                <button className="btn-primary mb-4 justify-content-center" onClick={() => { onBackClick(null); }}  >
                    Back
                </button>
            </div>
        );
    }
}

export default SoapView;