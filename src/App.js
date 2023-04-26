import React, { useEffect, useState } from 'react';
import Tile from './components/Tile';
import SortFacet from './components/SortFacet';
import { hotelData } from './data';
import './App.css';

// const sortKeys = ['price', 'name', 'rating'];
const sortKeys = [
  { key: 'price', label: 'price' },
  { key: 'name', label: 'alphabetically' },
  { key: 'rating', label: 'star rating' }
];

const App = () => {
  const [sortKey, setSortKey] = useState('name');
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const sortedData = hotelData.sort((a, b) => {
      if (sortKey === 'price') {
        return a.price - b.price;
      } else if (sortKey === 'name') {
        return a.name > b.name ? 1 : -1;
      } else if (sortKey === 'rating') {
        return b.rating - a.rating;
      }
    });
    setMyData(sortedData.map((hotel, i) => <Tile key={i} hotel={hotel} />));
  }, [sortKey]);

  return (
    <div className="App">
      <div className="page-container">
        <div className="sort-container">
          {sortKeys.map((sortObject, i) => (
            <SortFacet
              className={sortObject.key === sortKey ? 'active' : ''}
              key={i}
              sortKey={sortObject.key}
              label={sortObject.label}
              setSortKey={setSortKey}
            />
          ))}
        </div>
        <div className="list-container">{myData}</div>
      </div>
    </div>
  );
};

export default App;
