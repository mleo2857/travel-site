import React from 'react';
import { Link } from 'react-router-dom';


const PointOfInterest = props => {
  return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card card-view">
          <div className="card-body">
            <h5>{props.name}</h5>
            <h5>{props.address}</h5>
            <h5>{props.category}</h5>
            <p>{props.about}</p>
          </div>
        </div>
      </div>
    )
};

export default PointOfInterest;
