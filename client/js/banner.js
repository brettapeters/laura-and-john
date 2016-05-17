Template.banner.onRendered(function() {
  drawLogo();
})

Template.banner.helpers({
  daysToGo: function() {
    let weddingDate = new Date(2016, 9, 2, 16);
    let today = new Date();
    let msInDay = 86400000;
    let daysToGo = Math.ceil((weddingDate - today) / msInDay);
    return daysToGo;
  }
})

Template.banner.events({
  'click .logo svg > g': drawLogo
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