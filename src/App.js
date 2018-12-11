import React, { Component } from 'react';
import './css/App.css';
import Router from './Router';

import PlacesService from './services/PlacesService';

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

    this.placesService = new PlacesService();

  }

  async componentDidMount() {
    const placesSearch = await this.placesService.search(); 

    console.log(placesSearch);

    // var map;
    // var service;
    // var infowindow;

    // // var mapCenter = new window.google.maps.LatLng(-33.8617374,151.2021291);

    // map = new window.google.maps.Map(document.getElementById('map'), {
    //   // center: mapCenter,
    //   zoom: 15
    // });
  
    // var request = {
    //   query: 'Museum of Contemporary Art Australia',
    //   fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
    // };
  
    // service = new window.google.maps.places.PlacesService(map);
    // service.findPlaceFromQuery(request, callback);
  
    // function callback(results, status) {
    //   if (status == window.google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       console.log(results[i]);
    //       // createMarker(results[i]);
    //     }
    //   }
    // }
  }


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
