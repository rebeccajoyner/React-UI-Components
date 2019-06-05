import React from 'react';
import './App.css';

import CalculatorContainer from './components/DisplayComponents/CalculatorContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';



const App = () => {
  return (
    <div class="Calc">
      <CalculatorContainer />

        <CalculatorDisplay />

        <NumberButton />
        
        <ActionButton />
    </div>
  );
};

export default App;
