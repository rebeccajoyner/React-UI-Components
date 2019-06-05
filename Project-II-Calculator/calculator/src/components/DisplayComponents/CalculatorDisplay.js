import React from 'react';
import './Display.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';



const CalculatorDisplay = () => {
    return (
    <div className="calc-math">0.000
            <div class="Display">
            <p>0.000000</p>
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