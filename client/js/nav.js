Template.nav.onRendered(function() {
  if(!Modernizr.touch) {
    $('nav').show();
  }
})

Template.nav.events({
	"click a[href^='#']": function(e) {
		var id = e.currentTarget.hash;
			if ($(id).length > 0) {
				e.preventDefault();
				
				// trigger scroll
				$(document).scrollTo(id, 600, "ease-out");

					// if supported by the browser we can even update the URL.
				if (window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
		}
	})