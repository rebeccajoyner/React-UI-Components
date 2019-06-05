import React from 'react';
import './Display.css';


import CalculatorDisplay from './CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorContainer = () => {
    return (
        <div class="CalCon">

            <CalculatorDisplay />

            <NumberButton />

            <ActionButton />

        </div>
    );
};


export default CalculatorContainer;