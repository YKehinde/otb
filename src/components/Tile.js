import React from 'react';
import Button from './Button';
import dayjs from 'dayjs';

import './Tile.css';

const Tile = ({ hotel }) => {
  const {
    name,
    price,
    accommodation,
    location,
    arrival_date,
    stay_length,
    image,
    departure_location,
    overview
  } = hotel;

  return (
    <div className="tile">
      <div className="hotel-feature">
        <div className="hotel-image--container">
          <img className="hotel-image" src={process.env.PUBLIC_URL + image} alt="hotel" />
        </div>
        <div className="hotel-info--container">
          <h3 className="hotel-name">{name}</h3>
          <p className="hotel-location">{location}</p>
          <div className="rating"></div>
          {Object.keys(accommodation).map((key, index) => {
            return (
              <>
                <p className="accommodation" key={index}>
                  <span>{accommodation[key]}</span>{' '}
                  {key === 'children' && accommodation[key] === 1 ? 'child' : key}
                </p>
                {Object.keys(accommodation).length - 1 !== index && `, `}
              </>
            );
          })}
          <p className="arrival">
            <span>{dayjs(arrival_date).format('D MMM YYYY')}</span> for{' '}
            <span>{stay_length} days</span>
          </p>
          <p className="departure-location">
            departing from <span>{departure_location}</span>
          </p>

          <Button price={price} />
        </div>
      </div>
      <div className="hotel-description">
        <h3 className="overview-title">Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Tile;
