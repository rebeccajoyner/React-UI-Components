import React from 'react';
import './Button.css';

import './AllButton';




const NumberButton = (props) => {
    return (
        <div className="btnAll">

        <button className={`btn-num ${props.className}`}>
            {props.text}
        </button>
        </div>
    );
};


export default NumberButton;
