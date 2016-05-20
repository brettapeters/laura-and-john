Template.banner.onRendered(function() {
  if(!Modernizr.touch) {
    drawLogo();
  } else {
    $('.logo, .banner-heading, .banner-date, .banner-countdown').addClass('active');
  }
})

Template.banner.helpers({
  daysToGo: function() {
    let weddingDate = new Date(2016, 9, 2, 16);
    let today = new Date();
    let msInDay = 86400000;
    let daysToGo = Math.floor((weddingDate - today) / msInDay);
    return daysToGo;
  }
})

Template.banner.events({
  'click .arrows': function() {
    $('a[href="#bs01"]').click();
  }
})

function drawLogo() {
  $('.logo').removeClass('active');
  let logoAmination = $('.logo svg').drawsvg({
    reverse: true,
    duration: 1500,
    stagger: 0,
    callback: function() {
      $('.logo').addClass('active');
      $('.banner-heading').addClass('active');
      setTimeout(function() {
        $('.banner-date').addClass('active');
      }, 700);
      setTimeout(function() {
        $('.banner-countdown').addClass('active');
      }, 1200);
    }
  });
  
  logoAmination.drawsvg('animate');
}