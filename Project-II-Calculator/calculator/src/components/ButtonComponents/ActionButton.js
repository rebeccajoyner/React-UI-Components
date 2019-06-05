import React from 'react';
import './Button.css';

import './AllButton';



const ActionButton = props => {
    return (
        <div className="btnAll">

        <button className={`large-btn ${props.className}`}>
        {props.text}
            </button>
        </div>
    );
};

export default ActionButton;