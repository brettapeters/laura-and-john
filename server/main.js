// Server

import { Meteor } from 'meteor/meteor';

Meteor.methods({
  submittedRequest: function () {
    return !!Users.findOne({addr: this.connection.clientAddress});
  },
  addUser: function() {
    if (!Users.findOne({addr: this.connection.clientAddress})) {
      Users.insert({addr: this.connection.clientAddress});
    }
  }
})