$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    //sommeil hours
    gsap.set('.nbr_anim .numbers', { 
      y: "0%" 
    })
    gsap.to('.nbr_anim .numbers', {
      y: '-800%',
      scrollTrigger: {
        trigger: ".sommeil",
        start: '0 0',
        end: '+='+winHeight15,
        scrub: true
      }
    });

});