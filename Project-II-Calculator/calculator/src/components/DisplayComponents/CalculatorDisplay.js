import React from 'react';
import './Display.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';



const CalculatorDisplay = () => {
    return (
    <div className="calc-btn">0.000
            <div class="Display">
            <h1>000000</h1>
           </div>

        <div class="Action"> 
        <ActionButton />
        </div>
        
        <div class="Number"> 
        <NumberButton />
        </div>
    </div>
    );
};

export default CalculatorDisplay;