import React, { Component } from 'react';
import './css/App.css';
import Router from './Router';

var Autocomplete = require('google-places-browser/autocomplete')
var Places = require('google-places-browser/places')

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      states: [{
                name: 'Ohio',
                cities: ['Cleveland','Columbus','Cincinnatti'],
              },
              {
                name: 'California',
                cities: ['Los Angeles','San Diego','San Francisco','Sacramento'],
              }],
      trips: [],
      currentState: '',
    }

  }

  // componentDidMount() {
  //   fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyBTaTb9XC32HJvYERRueOxEB97vpVL3ESE',
  //   {
  //     mode: 'no-cors',
  //   })
  //   .then(function(results) {
  //     return results.json();
  //   }).then(function(myJson) {
  //     console.log(JSON.stringify(myJson));
  //   })
  // }






  // async componentDidMount() {
  //
  //   var autocomplete = Autocomplete(window.google)
  //   var places = Places(window.google)
  //
  //   autocomplete.places({input: 'San Francisco'}, function (err, results) {
  //     //=> handle err/result array
  //     console.log(err);
  //     console.log(results);
  //   })
  //
  //   places.details({placeId: 'id'}, function (err, place) {
  //     //=> handle err/place
  //     console.log(err);
  //     console.log(results);
  //   })
  //
  //
  //
  //   // const apiCall = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyApBhUsIjHLZooUYepjQDoKAbzmPG6uV4g',
  //   // {
  //   //   mode: 'no-cors',
  //   // })
  //   //
  //   // const apiCallJSON = await apiCall.text();
  //   //
  //   // console.log(apiCallJSON);
  // }


  addTrip = () => {
    this.setState({
      ...this.state,
      trips: {
        id: Date.now(),
      },
    })
  }

  setCurrentState = state => {
    this.setState({
      ...this.state,
      currentState: state,
    })
  }


  render() {

    return (
      <Router
        addTrip={this.addTrip}
        trips={this.state.trips}
        states={this.state.states}
        currentState={this.state.currentState}
        setCurrentState = {this.setCurrentState}
        />
    );
  }
}

export default App;
