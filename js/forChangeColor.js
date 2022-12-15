$(document).ready(function() {

	const mediaQuery = window.matchMedia('(min-width: 992px)')
	if (mediaQuery.matches){

	    var controller = new ScrollMagic.Controller()

	    var second = new ScrollMagic.Scene({
	        triggerElement: '#second',
	        duration: "100%",
	        triggerHook: 0.15
	    })
	    .setPin('#second')

	    .setClassToggle('.les-beiges-sect-body', 'red-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);

	    var third = new ScrollMagic.Scene({
	        triggerElement: '#third',
	        duration: "100%",
	        triggerHook: 0.15
	    })
	    .setPin('#third')

	    .setClassToggle('.les-beiges-sect-body', 'green-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);

	    var fourth = new ScrollMagic.Scene({
	        triggerElement: '#fourth',
	        duration: "100%",
	        triggerHook: 0.15
	    })
	    .setPin('#fourth')
	    
	    .setClassToggle('.les-beiges-sect-body', 'blue-bg')
	    // .addIndicators() // remove this before publishing
	    .addTo(controller);
    }
})



