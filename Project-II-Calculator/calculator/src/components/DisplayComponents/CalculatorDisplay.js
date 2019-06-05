import React from 'react';
import './Display.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';



const CalculatorDisplay = () => {
    return (
        <div className="calcBtn">

            <div class="Display">
            <h3>000000</h3>
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