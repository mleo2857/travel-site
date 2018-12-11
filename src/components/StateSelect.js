import React from 'react';
import { Link } from 'react-router-dom';
import '../css/State-Select.css';

const StateSelect = props => {
  const showStates = () => {
    return (
      <div>
          <h1>Select a State:</h1>
          <ul>
          {
            props.states.map(state =>
              <li>
                <Link
                  className="btn btn-primary btn-lg"
                  to="/citySelect"
                  onClick={(e) => props.setCurrentState(state.name)}
                > {state.name}
                </Link>
              </li>
            )
          }
          </ul>
      </div>
    )
  };

  return (
    <div className="state-select-page">
    {showStates()}
    </div>
  );
};

export default StateSelect;
