import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserPage.css';

const UserPage = props => {
  const noTrips = () => {
    return (
    <div>
      <div
        className="d-flex d-flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
        }}>
        <div
          className="jumbotron"
        >
          <h1
            className="display-4"
          > You do not have any trips yet.</h1>
          <p
              className="lead"
            >
              "Why don't you start planning one?"
            </p>
          <Link
            className="btn btn-primary btn-lg"
            to="/stateSelect"
          >
            Start a Trip
          </Link>
        </div>
      </div>
    </div>
  )
  }

  return (
    <div className="homePage">
    {props.trips.length <= 0 && noTrips()}
    </div>
  );

};


export default UserPage;
