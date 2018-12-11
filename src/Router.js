import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import UserPage from './components/UserPage';
import StateSelect from './components/StateSelect';
import Navbar from './components/Navbar';
import CitySelect from './components/CitySelect';

const Router = ({
  addTrip,
  trips,
  states,
  currentState,
  setCurrentState,
}) => (
  <BrowserRouter>
    <div>
      <Navbar />

      <Route
        name="Homepage"
        exact path="/"
        render={props => (
          <UserPage
            trips={trips}
            {...props}
            />
        )}
      />

      <Route
        name="stateSelect"
        path="/stateSelect"
        render={props => (
          <StateSelect
            states={states}
            currentState={currentState}
            setCurrentState={setCurrentState}
            {...props}
          />
        )}
      />

      <Route
        name="citySelect"
        path="/citySelect"
        render={props => (
          <CitySelect
            states={states}
            currentState={currentState}
            {...props}
          />
        )}
      />



    </div>
  </BrowserRouter>
);

export default Router;
