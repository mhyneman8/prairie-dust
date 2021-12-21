import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

import CartState from './context/cart/CartState';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import AboutView from './components/about-view/about-view';
import ContactView from './components/contact-view/contact-view';
import CheckoutView from './components/checkout-view/checkout-view';
import Navbar from './components/navbar/navbar';
import StoreView from './components/store-view/store-view';

ReactDOM.render(
  <Router>
    <CartState>
      <Navbar />
      <Routes>
        <Route path="/" element={ <StoreView />} />
        <Route path="/about" element={ <AboutView /> } />
        <Route path="/contact" element={ <ContactView /> } /> 
        <Route path="/checkout" element={ <CheckoutView />} />

      </Routes>
    </CartState>
  </Router>,
  document.getElementById('root')
);

