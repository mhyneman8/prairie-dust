import React from 'react';

function SoapView() {
        const { soap } = "soapTest";

        return (
            <div className="soap-view">
                <div className="soap-img">
                    <img src={soap.image} alt={`Preview of ${soap.title}`} />
                </div>
                <div className="soap-title">
                  <h3>{ soap.title }</h3>  
                </div>
                <div className="soap-description">
                    <p>{ soap.description }</p>
                </div>
                <div className="soap-size">
                    <p>{ soap.size }</p>
                </div>
                <div className="soap-ingredients">
                    <p>Contains: { soap.ingredients }</p>
                </div>
                <div className="soap-price">
                    <p>${ soap.price }</p>
                </div>

                <button
                    className="add-item"
                    data-item-id={soap.id}
                    data-item-image={soap.image}
                    data-item-name={soap.title}
                    data-item-url="/"
                    data-item-price={soap.price}
                >
                    Add to Cart
                </button>
            </div>
        );
    }

export default SoapView;