import React from 'react';
import './App.css';


import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Foot from "./components/FooterComponents/Foot";




const App = () => {
  return (
    <div>
      <HeaderContainer />
      
      <CardContainer />

      <Foot />
    </div>
  );
};

export default App;
