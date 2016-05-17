Meteor.startup(function() {
  
  // seed song requests DB
  if (SongRequests.find().count() == 0) {
    SongRequests.insert(
      {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        requestedBy: "Brett Peters",
        rank: 5
      }
    )
  }
})