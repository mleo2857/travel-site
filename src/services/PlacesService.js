import React from 'react';

class PlacesService {
  constructor() {
    if(!window.googlePlacesService) {
      const mapCenter = new window.google.maps.LatLng(-33.8617374,151.2021291);

      window.googlePlacesService = new window.google.maps.places.PlacesService(
        new window.google.maps.Map(document.getElementById('map')),
        {
          center: mapCenter,
          zoom: 15
        }
      );
      this.placesService = window.googlePlacesService;
    } else {
      this.placesService = window.googlePlacesService;
    }

    this.search = this.search.bind(this);
  }

  search() {
    return new Promise(function(resolve, reject) {
      var request = {
        query: 'Cosi Columbus',
        fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
      };
  
      function callback(results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(`results came back not OK - ${status}`)
        }
      }
  
      window.googlePlacesService.findPlaceFromQuery(request, callback);
    });
  }
}

export default PlacesService;