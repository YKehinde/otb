import React, { useState } from 'react';

const StarRating = props => {
  const { rating } = props;

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span key={starNumber} style={{ color: rating >= starNumber ? 'gold' : 'transparent' }}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
