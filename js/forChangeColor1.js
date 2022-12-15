const mediaQuery = window.matchMedia('(max-width: 991px)')
if (mediaQuery.matches){

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller()

	    var second = new ScrollMagic.Scene({
	        triggerElement: '#second',
	        duration: "100%",
	        triggerHook: 0.25
	    })
	    // .setPin('#second')

	    .setClassToggle('.les-beiges-sect-body', 'red-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);

	    var third = new ScrollMagic.Scene({
	        triggerElement: '#third',
	        duration: "100%",
	        triggerHook: 0.25
	    })
	    // .setPin('#third')

	    .setClassToggle('.les-beiges-sect-body', 'green-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);

	    var fourth = new ScrollMagic.Scene({
	        triggerElement: '#fourth',
	        duration: "100%",
	        triggerHook: 0.3
	    })
	    // .setPin('#fourth')
	    
	    .setClassToggle('.les-beiges-sect-body', 'blue-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);
	    })

}
