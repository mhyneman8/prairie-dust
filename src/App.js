import React from 'react';
import './App.css';
import StoreView from './components/store-view/store-view';
import Navbar from './components/navbar/navbar';
// import AboutView from './components/about-view/about-view';
// import { Router, Route } from 'react-router-dom';
// import StoreView from './components/store-view/store-view';

function App() {
  // const [itemCount, setItemCount] = useState(0);
    return (
      <React.Fragment>
        <Navbar />
        <StoreView />
      </React.Fragment>
        
    );
}

export default App;
