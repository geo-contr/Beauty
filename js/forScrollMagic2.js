// var controller = new ScrollMagic.Controller();


  // reparation
    var tweenOpaReparation = TweenMax.to(document.querySelector('.reparation_container'), 1, {
    	opacity: 1
    })


    var sceneOpaReparation = new ScrollMagic.Scene({
    	triggerElement: '#triggerRepatxtF', 
      duration: winHalfHeight, 
      triggerHook: 0.1
    })
          .setTween(tweenOpaReparation)
          .addTo(controller)
          .setPin("#pin1");




    // restorative
    var tweenOpaRestorative = TweenMax.to(document.querySelector('.restorative_container'), 1, {
    	opacity: 1
    });


    var sceneOpaRestorative = new ScrollMagic.Scene({
    	triggerElement: '#triggerRepatxtF1', 
      duration:winHalfHeight, 
      triggerHook: 0.5
    })
          .setTween(tweenOpaRestorative)
          .addTo(controller)
          // .setPin("#pin1")


    // FADEOUTrestorative
    var tweenRestorativeOut = TweenMax.to(document.querySelector('.restorative_container'), 1, {
      opacity: 0
    });

    var sceneRestorativeOut = new ScrollMagic.Scene({
    	triggerElement: '#restorative_fadeout', 
      duration: '100%', 
      triggerHook: 0.5
    })
          .setTween(tweenRestorativeOut)
          .addTo(controller);




   






    $(window).scroll(function(){
      // $(".footer-brand-backgr").toggleClass("footerfixed", $(this).scrollTop() > 8500);
      $(".footer-brand-backgr").toggleClass("footerfixed", $(this).scrollTop() > 20500);
    });


const mediaQuery = window.matchMedia('(max-height: 1080px)')
    
  if (mediaQuery.matches) {

     $(window).scroll(function(){
      $(".footer-brand-backgr").toggleClass("footerfixed", $(this).scrollTop() > 8500);
      // $(".footer-brand-backgr").toggleClass("footerfixed", $(this).scrollTop() > 20500);
    });
}


    // mega-menu
    // close with escape key
	document.addEventListener("keydown", function (e){
	  console.log(e);
	  if (e.key == "Escape"){
	  	$(".big-menu").removeClass("border_color_change border_color_change1 border_color_change2 border_color_change3");
	  }
	});
	// end of close with escape key


	$(".bigmenu-overlay").click(function(){
		$(".big-menu").removeClass("border_color_change border_color_change1 border_color_change2 border_color_change3");
	});

	$("#mega-one").click(function(){
		$(".big-menu").toggleClass("border_color_change");
		$(".big-menu").removeClass("border_color_change1 border_color_change2 border_color_change3");
	});

	$(".close-butt, .close-butt-about, .close-butt-contact").click(function(){
		$(".big-menu").removeClass("border_color_change border_color_change1 border_color_change2 border_color_change3");
	});
	
	$("#mega-two").click(function(){
		$(".big-menu").toggleClass("border_color_change1");
		$(".big-menu").removeClass("border_color_change border_color_change2 border_color_change3");
	});

	$("#mega-three").click(function(){
		$(".big-menu").toggleClass("border_color_change2");
		$(".big-menu").removeClass("border_color_change1 border_color_change border_color_change3");
	});

	$("#mega-four").click(function(){
		$(".big-menu").toggleClass("border_color_change3");
		$(".big-menu").removeClass("border_color_change1 border_color_change2 border_color_change");
	});
	// end of mega-menu