import React from 'react';
import './Button.css';





const NumberButton = (props) => {
    return (
        <div className="btnAll">

        <button className={props.btnNum}>
            {props.text}
            </button>
        </div>
    );
};


export default NumberButton;
