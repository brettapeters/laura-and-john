import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';

Template.body.onRendered(function() {
  if (Modernizr.touch) {
    $('#story .bcg').remove();
    $('#story').removeClass('fs');
    
    var screenHeight = $('.fs').height();
    $('.fs').height(screenHeight);
  }
})

