Meteor.startup(function() {
  // load Google Maps
  GoogleMaps.load({ v: '3', key: 'AIzaSyCP5PcqCBxwQCVQbiqCx-x87P3JDvcCmHc', libraries: 'geometry,places' });
});
