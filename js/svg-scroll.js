// ScrollMagic
// ჯავას მოქმედება რესპონსივზე
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches){


	function splitScroll(){
	  const controller = new ScrollMagic.Controller();

	  new ScrollMagic.Scene({
	    duration: 2000,
	    triggerElement: '.founder-img',
	    triggerHook: 0.09
	  })
	  .setPin('.founder-img')
	  // .addIndicators()
	  .addTo(controller);
	}

	splitScroll();
	// end of ScrollMagic


	// svg drawing with scroll: html-ში ვამატებ ScrollMagic-დან: TweenMax.min.js, ScrollMagic.min.js, animation.gsap.js
	var controller = new ScrollMagic.Controller();

	function pathPrepare($el) {
	  var lineLength = $el[0].getTotalLength();
	  $el.css("stroke-dasharray", lineLength);
	  $el.css("stroke-dashoffset", lineLength);
	}

	var $route = $("path#route-1");
	var $route1 = $("path#route-2");

	// prepare SVG
	pathPrepare($route);
	pathPrepare($route1);

	// build tween
	var route_1 = new TimelineMax()
	  .add(TweenMax.to($route, 0.9, {
	    strokeDashoffset: 0,
	    ease: Linear.easeNone
	  }))
	  .add(TweenMax.to($route1, 1.0, {
	    strokeDashoffset: 0,
	    ease: Linear.easeNone
	  }));

	var scene = new ScrollMagic.Scene({
	    triggerElement: "#trigger-route-1",
	    duration: 2000,
	    tweenChanges: true
	  })
	  .setTween(route_1)
	  //.addIndicators()
	  .addTo(controller);
	  // end of  svg drawing with scroll

 }
// end of ჯავას მოქმედება რესპონსივზე


// Refresh Page and Keep Scroll Position
document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};
// end of Refresh Page and Keep Scroll Position


// animation on scroll
window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 0;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}
		else{
			reveals[i].classList.remove('active');
		}
	}
}
// end of animation on scroll