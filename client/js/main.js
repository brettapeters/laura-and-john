import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';

Template.body.onRendered(function() {
  if (Modernizr.touch) {
    var screenHeight = $('.fs').height();
    $('.fs').height(screenHeight);
    
    $('#story .bcg').hide();
    $('#story').removeClass('fs');
  }
})

