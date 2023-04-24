import React from 'react';
import './Button.css';

const Button = ({ price }) => {
  return (
    <button
      className="tile-button"
      onClick={() => {
        console.log('price');
      }}
    >
      <h4>Book now</h4>
      <span className="price">£{price}</span>
    </button>
  );
};

export default Button;
