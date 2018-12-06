import React, { Component } from 'react';
import logo from './logo.jpeg';

class App extends Component {

  render() {
    return (
      <div className="App">

        <body className="App-body">
          <div className = "Homepage-msg">
            <h2>Welcome to my travel site. Select a country to start planning your trip:</h2>
            Country:<input type="text" name="Country"></input>
            <input type="submit"/>

            <h5>Returning User? <button>login</button></h5>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
