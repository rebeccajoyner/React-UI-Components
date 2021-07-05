import React from 'react';
import './App.css';

import CalculatorContainer from './components/DisplayComponents/CalculatorContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import MathButton from './components/ButtonComponents/MathButton';
import AllButton from './components/ButtonComponents/AllButton';



const App = () => {
  return (
    <div className="calc-body">
      
      <CalculatorDisplay />


      <AllButton className="btnAll">
        <ActionButton className="large-btn" text="CLEAR" />
        <NumberButton className="btnMath" text="/" />
      </AllButton>


      <AllButton>
        <NumberButton className="btnNum" text="7" />
        <NumberButton className="btnNum" text="8" />
        <NumberButton className="btnNum" text="9" />
        <NumberButton className="btnMath" text="X" />
      </AllButton>


      <AllButton>
        <NumberButton className="btnNum" text="4" />
        <NumberButton className="btnNum" text="5" />
        <NumberButton className="btnNum" text="6" />
        <NumberButton className="btnMath" text="-" />
      </AllButton>
      <AllButton>
        <NumberButton className="btnNum" text="1" />
        <NumberButton className="btnNum" text="2" />
        <NumberButton className="btnNum" text="3" />
        <NumberButton className="btnMath" text="+" />
      </AllButton>
      <AllButton>
        <ActionButton className="large-btn" text="0" />
        <NumberButton className="btnMath" text="=" />
      </AllButton>
    </div>
  );
};

export default App;
