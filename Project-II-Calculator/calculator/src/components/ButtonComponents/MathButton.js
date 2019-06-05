
import React from 'react';
import './Button.css';

import './AllButton';



const MathButton = (props) => {
    return (
        <div className="btnAll">

        <button className={props.btnMath}>
            {props.text}
            </button>
        </div>
    );
};


export default MathButton;