Template.content.onRendered(function() {
  // Init ScrollMagic controller
  var controller = new ScrollMagic.Controller();
  
  // Get all triggers for slides
  var headers = ['#slide1 header', '#slide2 header', '#slide3 header'];
  
  // Create scenes for headers
  headers.forEach(function(header, index) {
    var num = index + 1;
    var headerScene = new ScrollMagic.Scene({
      triggerElement: header,
      offset: -95
    })
    .setClassToggle(`#slide${num}`, 'active')
    .reverse(false)
    .addTo(controller)
  });
  
  // Create Animation for 0.5s
  var tween = TweenMax.to('#animation', 0.5, {
    left: '500px',
  });
  
  // Create the Scene and trigger when visible with ScrollMagic
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 250, /* offset the trigger 150px below #scene's top */
  })
  .setTween(tween)
  .addTo(controller);
})
