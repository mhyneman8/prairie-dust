import React from 'react';
import products from '../../products.json';

function StoreView() {
        return (
            <div className="main-view">
                {products.map(product => {
                    return (
                        <div key={product.id} className="product-card">
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
                                onClick={() => {alert("nice!")}}
                            >
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>  
        );
    }

export default StoreView;