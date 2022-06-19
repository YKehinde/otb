import React from 'react'
import Button from './Button';

import './Tile.css';

const Tile = ({hotel}) => {
  const {name, price, accommodation, location, arrival_date,
stay_length, image,
departure_location,
overview} = hotel;

console.log(image);
  return (
    <div className='tile'>
    <div className="hotel-feature">
      <div className="hotel-image--container">
        <img className="hotel-image" src={process.env.PUBLIC_URL + image} alt="hotel" />
      </div>
      <div className="hotel-info--container">
        <h3 className="hotel-name">{name}</h3>
        <p className='hotel-location'>{location}</p>
        <div className='rating'></div>
        <p className='accommodates'>
          {
            Object.keys(accommodation).map((key, index) =>{
              return (
                <span key={index}>
                  {accommodation[key]} {key}
                </span>
              )
            })
          }
        </p>
        <p className='arrival'>{arrival_date} for {stay_length} days</p>
        <p className='departure-location'>{departure_location}</p>

        <Button price={price} />
      </div>
    </div>
    <div className="hotel-description">
          {overview}
    </div>
    </div>
  )
}

export default Tile;
