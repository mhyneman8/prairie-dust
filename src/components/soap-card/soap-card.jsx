import React, { useContext, useState } from 'react';
import CartContext from '../../context/cart/CartContext';
import SoapView from '../soap-view/soap-view';
import './soap-card.css';
import Modal from 'react-bootstrap/Modal'


const SoapCard = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
        const { addToCart, setShowMore, showMore } = useContext(CartContext);
        
        return (
            <div>
                {showMore ? 

                    <Modal.Dialog
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{product.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <SoapView key={product.id} product={product} /> 
                        </Modal.Body>

                        <Modal.Footer>
                            <button variant="secondary" onClick={handleClose}>Close</button>
                            <button className="add-item" 
                                onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </Modal.Footer>
                    </Modal.Dialog>

                
                : null }
                <div className="soap-card__wrapper" >
                
                
                <img className="soapCard__img" src={product.image}  alt="" />
                <h4>{product.title}</h4>
                <div className="productCard_price">
                    <h5>{product.price}</h5>
                </div>
                <div>
                    {showMore ? <div>
                        <h6>{product.description}</h6>
                        <h6>{product.size} oz</h6>
                        <h6>Contains: </h6> <p>{ product.ingredients.map((ingredients) => ingredients + " ") }</p> 
                        </div>
                        : ""}
                    <button className="show-more" onClick={() => setShowMore(product.id)}>
                        {showMore ? "Show Less -" : "Show More +"}
                    </button>
                </div>
                <button className="add-item" 
                    onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div> 
        </div>
        ); 
    }

export default SoapCard