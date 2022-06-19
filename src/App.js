import React, { useEffect, useState } from 'react';
import Tile from './components/Tile';
import {hotelData} from './data';
import './App.css';

const App = () => {
  const [sortKey, setSortKey] = useState('name');

  // useEffect( () => {
  // //   const fetchData = async () => {
  // //   const response = await fetch('./data.json');
  // //   const data = await response.json();
  // //   console.log(data);

  // // }
  // setHotelData(hotelData);
  // }, [hotelData]);

  const myData = [].concat(hotelData)
    .sort((a, b) => a.sortKey > b.sortKey ? 1 : -1)
    .map((hotel, i) => 
        <Tile key={i} hotel={hotel} />
    );

  return (
    <div className="App">
      {myData}
    </div>
  );
}

export default App;
