import React from 'react';
import './App.css';


import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div className="whole-container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
      
    </div>
  );
};

export default App;
