import React from 'react';
import { Link } from 'react-router-dom';
import PointOfInterest from './PointOfInterest';

const CityPage = props => {
  const thisState = props.states.filter(state => state.name === props.currentState);
  const thisCity = thisState.filter(state => state.cities.name === props.currentCity);
  return (
    <div>
      <h1>{props.currentState}>{props.currentCity}</h1>
      {thisCity.map(state => state[0].cities[0].poi.map(poi => (
          <PointOfInterest
            name={poi.name}
            address={poi.address}
            category={poi.category}
            about={poi.about}
            />
        )))}
      <h1>{thisState}</h1>
    </div>
  );

}

export default CityPage;
