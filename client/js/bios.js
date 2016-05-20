Template.bios.events({
  'mouseenter .bio-card > *': function(e) {
    $(e.currentTarget).closest('.bio-card').addClass('hover');
  },
  'mouseleave .bio-card > *': function(e) {
    $(e.currentTarget).closest('.bio-card').removeClass('hover');
  }
})