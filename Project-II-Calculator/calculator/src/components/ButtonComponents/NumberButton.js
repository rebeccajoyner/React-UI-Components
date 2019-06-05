import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';




const NumberButton = (props) => {
    return (
        <button className='act-btn'>
            {props.text}
        </button>
    );
};


export default ActionButton;
