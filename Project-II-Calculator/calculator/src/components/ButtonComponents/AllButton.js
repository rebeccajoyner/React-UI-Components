import React from 'react';
import './Button.css';

const AllButton = props => {
    return (
      <div className={`btnAll ${props.className}`}>
        {props.children}
      </div>
    );
  };
  
  export default AllButton;
  