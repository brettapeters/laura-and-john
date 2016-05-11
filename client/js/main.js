import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';

Template.song_requests.helpers({
  songs: function() {
    return SongRequests.find();
  }
})