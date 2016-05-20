Template.body.onRendered(function() {
  var content = ['#bs01', '#bs02', '#bs03', '#bs04', '#bs06', '#story .wrapper'];
  
  if(!Modernizr.touch) {
    // Init ScrollMagic controller
    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: "200%"}});
    
    var bcgSlides = ['#intro', '#story', '#details'];
    
    bcgSlides.forEach(function(slide) {
      var $bcg = $(slide).find('.bcg');
      
      var slideParallaxScene = new ScrollMagic.Scene()
      .setTween(TweenMax.to($bcg, 1, {y: '80%', ease:Power0.easeNone}))
      .addTo(controller);
    })
    
    
    content.forEach(function(id) {
      var contentSlide = new ScrollMagic.Scene({
      triggerElement: id,
      offset: '-300px'
    })
    .setClassToggle(id, 'active')
    .addTo(controller);
    })
    
    var lightSections = ['#bs01', '#bs02', '#bs03', '#bios', '#map'];
    
    // lightSections.forEach(function(section) {
    //   var lightScene = new ScrollMagic.Scene({
    //   triggerElement: section,
    //   triggerHook: 0.50,
    //   duration: '100%'
    // })
    // .setClassToggle('nav', 'is-dark')
    // .addTo(controller);
    // })
    
    // var darkSections = ['#intro', '#story']
    
    // darkSections.forEach(function(section) {
    //   var lightScene = new ScrollMagic.Scene({
    //   triggerElement: section,
    //   triggerHook: 0.50,
    //   duration: '100%'
    // })
    // .setClassToggle('nav', 'is-light')
    // .addTo(controller);
    // });
  }
  else {
    content.forEach(function(section) {
      $(section).addClass('active');
    })
  }
})