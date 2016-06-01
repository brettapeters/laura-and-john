Template.song.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var songData = {
      title: e.currentTarget[0].value,
      artist: e.currentTarget[1].value,
      requestedBy: e.currentTarget[2].value
    };
    
    SongRequests.insert(songData, function() {
      Meteor.call('addUser');
      $('#song-request').fadeOut(function() {
        $(this).html('<h1>Thank you for your song request!</h1>')
      }).fadeIn()
    });
  }
});

Template.song.helpers({
  newUser: function() {
    return !Meteor.call('submittedRequest');
  }
})