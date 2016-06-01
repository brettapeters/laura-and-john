SongRequests = new Mongo.Collection("song_requests");

SongRequests.allow({
  insert: function() {
    return !Meteor.call('submittedRequest');
  }
})