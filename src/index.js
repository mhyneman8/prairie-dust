import React from 'react';
import ReactDOM from 'react-dom';

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import AboutView from './components/about-view/about-view';
import ContactView from './components/contact-view/contact-view';
import Cart from './components/cart/cart';
import Navbar from './components/navbar/navbar';
import StoreView from './components/store-view/store-view';

ReactDOM.render(
  <Router>
    {/* <Navbar /> */}
    {/* <App /> */}
    <Routes>
      <Route path="/" element={ <App />} />
      <Route path="/about" element={ <AboutView /> } />
      <Route path="/contact" element={ <ContactView /> } /> 

    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
