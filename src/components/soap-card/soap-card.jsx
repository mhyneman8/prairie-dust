import React from 'react';

class SoapCard extends React.Component {
    render() {
        const { product, onSoapClick } = this.props;
        
        return(
            <div key={product.id} className="movie-card card">
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3
                    onClick={() => { onSoapClick(product); }}    
                >{ product.title }</h3>
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
    }
}

export default SoapCard