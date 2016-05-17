import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';

Template.song_requests.helpers({
  songs: function() {
    return SongRequests.find();
  }
})

Template.content.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(39.149790, -104.900439),
        zoom: 15,
        scrollwheel: false
      };
    }
  }
})

Template.content.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('location', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.150181, -104.890654),
      map: map.instance,
      animation: google.maps.Animation.DROP,
      icon: 'images/location-pin.svg'
    });
  });
})