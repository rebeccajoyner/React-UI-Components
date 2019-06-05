import React from 'react';
import './Button.css';



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