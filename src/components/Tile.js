import React, { useState } from 'react';
import Button from './Button';
import dayjs from 'dayjs';

import './Tile.css';
import StarRating from './StarRating';

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
    overview,
    rating
  } = hotel;

  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  const handleOverview = () => {
    setIsOverviewOpen(!isOverviewOpen);
  };

  return (
    <div className="tile">
      <div className="hotel-feature">
        <div className="hotel-image--container">
          <img className="hotel-image" src={process.env.PUBLIC_URL + image} alt="hotel" />
          <div className="hotel-image--overlay">
            <p onClick={handleOverview}>
              <span>Read more</span> about this hotel {isOverviewOpen ? '^' : '>'}
            </p>
          </div>
        </div>
        <div className="hotel-info--container">
          <h3 className="hotel-name">{name}</h3>
          <p className="hotel-location">{location}</p>
          <div className="rating">
            <StarRating rating={rating} />
          </div>
          <div className="hotel-details">
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
          </div>

          <Button price={price} />
        </div>
      </div>
      {isOverviewOpen && (
        <div className="hotel-description">
          <h3 className="overview-title">Overview</h3>
          {overview}
        </div>
      )}
    </div>
  );
};

export default Tile;
