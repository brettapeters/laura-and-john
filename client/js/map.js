var center = {lat: 39.337587, lng: -104.846160};

Template.details.onRendered(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('location', function(map) {
    // Add markers
    var locations = [{id: '#venue',
                      icon: 'images/love.png',
                      latLng: {lat: 39.150181, lng: -104.890654}
                     },
                     {id: '#hotel',
                      icon: 'images/hotel-building.png',
                      latLng: {lat: 39.541728, lng: -104.870396}
                     }];
                     
    var infowindow = new google.maps.InfoWindow();
    
    locations.forEach(function(location) {
      var marker = new google.maps.Marker({
        position: location.latLng,
        map: map.instance,
        animation: google.maps.Animation.DROP,
        icon: location.icon
      });
      
      marker.addListener('click', function() {
        infowindow.setContent($(location.id).html());
        map.instance.setZoom(15);
        map.instance.setCenter(location.latLng);
        infowindow.open(map.instance, marker);
      });
      
      infowindow.addListener('closeclick', function() {
        map.instance.setZoom(9);
        map.instance.setCenter(center);
      })
    });
  });
});

Template.details.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: center,
        zoom: 9,
        scrollwheel: false,
        draggable: false,
        styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":0},{"gamma":1.5}]}],
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
      };
    }
  }
})