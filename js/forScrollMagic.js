


	function IsImageOk(img) {
	    if (!img.complete) {
	        return false;
	    }
	    if (img.naturalWidth === 0) {
	        return false;
	    }
	    return true;
	}



	  var headerH = document.querySelector('header').getBoundingClientRect().height;
	  var flacon = document.querySelector('#sblmg .intro picture');
	  var flaconPosTop = flacon.getBoundingClientRect().top;
	  var pictureOffset = document.querySelector('#sblmg .intro picture').getBoundingClientRect().height * 0.79;
	  var flaconOffset = (-flaconPosTop - pictureOffset + headerH).toFixed(1);
	  const root = document.documentElement;
	  root.style.setProperty('--flacon-offset', flaconOffset+'px');
	  var winHeight = window.innerHeight - headerH;
	  var winHeight15 = winHeight*1.5;
	  var winDoubleHeight = winHeight*2;
	  var winHalfHeight = (window.innerHeight / 2) - headerH;
	  var winWidth = window.innerWidth;
	  document.querySelector('#sblmg .intro picture img').style.visibility = 'visible';


	  translateCTA();




	var controller = new ScrollMagic.Controller({
		loglevel: 3,
	    addIndicators: false
	});


	var startScenes = +(((document.querySelector(".intro").getBoundingClientRect().top + window.scrollY) / window.outerHeight) + 0.01).toFixed(2);

	var tweenScrollDown = TweenMax.to(document.querySelector('#sblmg .intro img'), 1, {
    y: 0, 
    opacity: 1
  });

	// scene flacon scroll
	var sceneScrollDown = new ScrollMagic.Scene({
    triggerElement: '#sblmg .intro', 
    duration: winHalfHeight, triggerHook: startScenes
  })
          .setTween(tweenScrollDown)
          .addTo(controller);

    var tweenScrollArrow = TweenMax.to(document.querySelector('#sblmg .scrolldown-arrow'), 1, {
      opacity: 0
    });

    var sceneScrollArrow = new ScrollMagic.Scene({
      triggerElement: '#sblmg .intro', duration:20, triggerHook: startScenes
    })
          .setTween(tweenScrollArrow)
          .addTo(controller);

    var tweenOpaTitle = TweenMax.to(document.querySelector('#sblmg h1'), 1, {
      top: 0
    });

    var sceneOpaTitle = new ScrollMagic.Scene({
      triggerElement: '#sblmg .intro #titlespan', 
      duration:200, 
      triggerHook: 0.2
    })
          .setTween(tweenOpaTitle)
          .addTo(controller);

    var tweenOpaIntroCTA = TweenMax.to(document.querySelector('#sblmg .intro a'), 1, {
      opacity: 1
    });
    var sceneOpaIntroCTA = new ScrollMagic.Scene({
      triggerElement: '#sblmg .intro #titlespan', 
      duration:200, 
      triggerHook: 0.45
    })
          .setTween(tweenOpaIntroCTA)
          .addTo(controller);


	var sceneOneFixedBottom = new ScrollMagic.Scene({
    triggerElement: '#sblmg #triggerFxdBottomintro', 
    duration: 0, 
    triggerHook: 1
  })
          .setClassToggle('#sblmg .intro_wrapper', 'sblmg-fixed-bottom')
          .addTo(controller);

    //FADEIN Promise
    var tweenOpaPromise = TweenMax.to(document.querySelector('#sblmg .promise h2'), 1, {
      opacity: 1
    });

    var sceneOpaPromise = new ScrollMagic.Scene({
      triggerElement: '#sblmg .promise', 
      duration: winHalfHeight, 
      triggerHook: 0.4
    })
          .setTween(tweenOpaPromise)
          .addTo(controller);

    //FIXED Promise
    // var tweenOpaPromise = TweenMax.to(document.querySelector('#sblmg .promise h2'), 1, {opacity: 1});

    var sceneFixedPromise = new ScrollMagic.Scene({
      triggerElement: '#sblmg .promise', 
      duration: 0, /*1500*/
      triggerHook: 0.1 /*0.1*/
    })
          .setClassToggle('#sblmg .promise-wrapper', 'sblmg-fixed')
          .addTo(controller);

     // FADEOUT Promise
     var tweenPromiseOut = TweenMax.to(document.querySelector('#sblmg .promise h2'), 1, {
      opacity: 0
    });

    var scenePromiseOut = new ScrollMagic.Scene({
      triggerElement: '#sblmg #triggerPromiseFadeOut', 
      duration: winHalfHeight, 
      triggerHook: 0
    })
          .setTween(tweenPromiseOut)
          .addTo(controller);




    // $(window).scroll(function(){
    //   $(".sblmg-fixed").toggleClass("sblmg_fixed_opacity", $(this).scrollTop() > 3500);
    // });



    //  // //FADEIN SOMMEIL
    // var tweenSommeilIn = TweenMax.to(document.querySelector('#sblmg .sommeil'), 1, {opacity: 1});
    // var sceneSommeilIn = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerPromiseFadeOut', duration:winHalfHeight, triggerHook: 0.2})
    //       .setTween(tweenSommeilIn)
    //       .addTo(controller);

    // //sommeil out
    // var scenePromiseFixedBottom = new ScrollMagic.Scene({triggerElement: '#sblmg .video_senso', duration: 0, triggerHook: 1})
    //       .setClassToggle('#sblmg .promise-wrapper', 'sblmg-fixed-bottom')
    //       .addTo(controller);

    // //FIXED SCENE SOMMEIL
    // var sceneOneFixed = new ScrollMagic.Scene({triggerElement: '#sblmg .promise', duration: 0, triggerHook: 0})
    //       .setClassToggle('#sblmg .sommeil_wrapper', 'sblmg-fixed')
    //       .addTo(controller);

    // //Sommeil flacon out
    // var tweenFlaconOut = TweenMax.to(document.querySelector('.sommeil_anim_flacon img'), 1, {top: 0,filter:'brightness(1)'});
    // var sceneFlaconOut = new ScrollMagic.Scene({triggerElement: '#sblmg .sommeil', duration:winHeight15, triggerHook: 0})
    //       .setTween(tweenFlaconOut)
    //       .addTo(controller);
    // //Sommeil trace
    // var tweenTraceShow = TweenMax.to(document.querySelector('.sommeil_anim_trace img'), 1, {filter:'brightness(1)'});
    // var sceneTraceShow = new ScrollMagic.Scene({triggerElement: '#sblmg .sommeil', duration:winHeight15, triggerHook: 0})
    //       .setTween(tweenTraceShow)
    //       .addTo(controller);
    //       gsap.registerPlugin(ScrollTrigger);
    // //sommeil hours
    // gsap.set('.nbr_anim .numbers', { y: "0%" })
    // gsap.to('.nbr_anim .numbers', {
    //   y: '-800%',
    //   scrollTrigger: {
    //     trigger: "#sblmg .sommeil",
    //     start: '0 0',
    //     end: '+='+winHeight15,
    //     scrub: true
    //   }
    // });

    //  //sommeil "hours" txt
    // var tweenTxtShow = TweenMax.to(document.querySelector('.nbr_anim .hour'), 1, {opacity:1});
    // var sceneTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeilhourtrigger', duration:300, triggerHook: 0.35})
    //       .setTween(tweenTxtShow)
    //       .addTo(controller);

    // //sommeil hours additional txt
    // var tweenTxtShow = TweenMax.to(document.querySelector('.sommeil_content .txt'), 1, {opacity:1});
    // var sceneTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration:300, triggerHook: 0.3})
    //       .setTween(tweenTxtShow)
    //       .addTo(controller);

    // //sommeil border bottom flacon
    // var sceneSommeilHideBorder = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration: 0, triggerHook: 0.2})
    //       .setClassToggle('#sblmg .sommeil_anim .sommeil_anim_flacon', 'hide-border-bottom')
    //       .addTo(controller);
    // //sommeil show CTA
    // var tweenCTASommeil = TweenMax.to(document.querySelector('#sblmg .sommeil_anim a'), 1, {opacity:1});
    // var sceneCTASommeil = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration: 20, triggerHook: 0.2})
    //       .setTween(tweenCTASommeil)
    //       .addTo(controller);

    // //sommeil out
    // var sceneSommeilFixedBottom = new ScrollMagic.Scene({triggerElement: '#sblmg .video_senso', duration: 0, triggerHook: 1})
    //       .setClassToggle('#sblmg .sommeil_wrapper', 'sblmg-sommeil-fixed-bottom')
    //       .addTo(controller);




    var headerEl = document.querySelector('header');
    var headerH = headerEl.getBoundingClientRect().height;
    var winHeight = window.innerHeight - headerH;
    var winHeight15 = winHeight*1.5;
    var winDoubleHeight = winHeight*2;
    var winHalfHeight = (window.innerHeight / 2) - headerH;
    var winWidth = window.innerWidth;

    document.querySelector('.intro').style.height = winHeight*1.5+'px';
    document.querySelector('.promise').style.height = winHeight+'px';
    document.querySelector('.sommeil').style.height = winHeight*3+'px';
    // document.querySelector('.hand').style.height = winDoubleHeight*1.5+'px';
    // document.querySelector('.reparation').style.height = winDoubleHeight+'px';


    function resizeReparation(){
      if(window.innerWidth < 601){
        document.querySelector('.reparation .reparation_container picture').style.top = document.querySelector('.reparation_content').getBoundingClientRect().height + document.querySelector('.reparation_content').getBoundingClientRect().top + 20 +'px';
      }
    }



          


// function IsImageOk(img) {
//     if (!img.complete) {
//         return false;
//     }
//     if (img.naturalWidth === 0) {
//         return false;
//     }
//     return true;
// }


function loadStuff(){
  
    



    // //FADEIN SOMMEIL
    // var tweenSommeilIn = TweenMax.to(document.querySelector('#sblmg .sommeil'), 1, {opacity: 1});
    // var sceneSommeilIn = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerPromiseFadeOut', duration:winHalfHeight, triggerHook: 0.2})
    //       .setTween(tweenSommeilIn)
    //       .addTo(controller);

    // //sommeil out
    // var scenePromiseFixedBottom = new ScrollMagic.Scene({triggerElement: '#sblmg .video_senso', duration: 0, triggerHook: 1})
    //       .setClassToggle('#sblmg .promise-wrapper', 'sblmg-fixed-bottom')
    //       .addTo(controller);

    // //FIXED SCENE SOMMEIL
    // var sceneOneFixed = new ScrollMagic.Scene({triggerElement: '#sblmg .promise', duration: 0, triggerHook: 0})
    //       .setClassToggle('#sblmg .sommeil_wrapper', 'sblmg-fixed')
    //       .addTo(controller);

    // //Sommeil flacon out
    // var tweenFlaconOut = TweenMax.to(document.querySelector('.sommeil_anim_flacon img'), 1, {top: 0,filter:'brightness(1)'});
    // var sceneFlaconOut = new ScrollMagic.Scene({triggerElement: '#sblmg .sommeil', duration:winHeight15, triggerHook: 0})
    //       .setTween(tweenFlaconOut)
    //       .addTo(controller);
    // //Sommeil trace
    // var tweenTraceShow = TweenMax.to(document.querySelector('.sommeil_anim_trace img'), 1, {filter:'brightness(1)'});
    // var sceneTraceShow = new ScrollMagic.Scene({triggerElement: '#sblmg .sommeil', duration:winHeight15, triggerHook: 0})
    //       .setTween(tweenTraceShow)
    //       .addTo(controller);
    //       gsap.registerPlugin(ScrollTrigger);
    // //sommeil hours
    // gsap.set('.nbr_anim .numbers', { y: "0%" })
    // gsap.to('.nbr_anim .numbers', {
    //   y: '-800%',
    //   scrollTrigger: {
    //     trigger: "#sblmg .sommeil",
    //     start: '0 0',
    //     end: '+='+winHeight15,
    //     scrub: true
    //   }
    // });


    // //sommeil "hours" txt
    // var tweenTxtShow = TweenMax.to(document.querySelector('.nbr_anim .hour'), 1, {opacity:1});
    // var sceneTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeilhourtrigger', duration:300, triggerHook: 0.35})
    //       .setTween(tweenTxtShow)
    //       .addTo(controller);

    // //sommeil hours additional txt
    // var tweenTxtShow = TweenMax.to(document.querySelector('.sommeil_content .txt'), 1, {opacity:1});
    // var sceneTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration:300, triggerHook: 0.3})
    //       .setTween(tweenTxtShow)
    //       .addTo(controller);

    // //sommeil border bottom flacon
    // var sceneSommeilHideBorder = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration: 0, triggerHook: 0.2})
    //       .setClassToggle('#sblmg .sommeil_anim .sommeil_anim_flacon', 'hide-border-bottom')
    //       .addTo(controller);
    // //sommeil show CTA
    // var tweenCTASommeil = TweenMax.to(document.querySelector('#sblmg .sommeil_anim a'), 1, {opacity:1});
    // var sceneCTASommeil = new ScrollMagic.Scene({triggerElement: '#sblmg #sommeiltxttrigger', duration: 20, triggerHook: 0.2})
    //       .setTween(tweenCTASommeil)
    //       .addTo(controller);

    // //sommeil out
    // var sceneSommeilFixedBottom = new ScrollMagic.Scene({triggerElement: '#sblmg .video_senso', duration: 0, triggerHook: 1})
    //       .setClassToggle('#sblmg .sommeil_wrapper', 'sblmg-sommeil-fixed-bottom')
    //       .addTo(controller);

    // //OPAIN VIDEO
    // var tweenOpaVideo = TweenMax.to(document.querySelector('.video_senso .video-container'), 1, {
    //   opacity: 1});
    // var sceneOpaIntroCTA = new ScrollMagic.Scene({
    //   triggerElement: '.video_senso .video-container', 
    //   duration:winHeight, 
    //   triggerHook: 0.45
    // })
    //       .setTween(tweenOpaVideo)
    //       .addTo(controller);

    //FIXED SCENE HAND
    var sceneHandFixed = new ScrollMagic.Scene({
      triggerElement: '.hand', 
      duration: winDoubleHeight*1.5, 
      triggerHook: 0
    })
          .setPin(".hand")
          //.setClassToggle('#sblmg .hand_wrapper', 'sblmg-fixed')
          .addTo(controller);

    //hand brightness
    var tweenHandBright = TweenMax.to(document.querySelector('.hand .hand_wrapper-container img'), 1, {
      opacity: 1
    });
    var sceneHandBright = new ScrollMagic.Scene({
      triggerElement: '.hand', 
      duration: winHeight, 
      triggerHook: 0
    })
          .setTween(tweenHandBright)
          .addTo(controller);

    //hand txt
    var tweenHandTxtHide = TweenMax.to(document.querySelector('.hand_content.first'), 1, {
      opacity: 0
    });
    var sceneHandTxtHide = new ScrollMagic.Scene({
      triggerElement: '#triggerSecondarytxt', 
      duration: 300, 
      triggerHook: 0.8
    })
          .setTween(tweenHandTxtHide)
          .addTo(controller);

    let counter = 0;
    function doCount(){
      setInterval(() =>{
        if(counter < 25){
          counter++;
          var counterLgth = counter.toString().length;
          //console.log(counter);
          //console.log(counter.toString().length);
          //console.log(counter.length);
          if(counterLgth < 2){
            document.querySelector('.hand_content.second .numbers-unite span').innerHTML = counter;
          }
          if(counterLgth == 2){
            var splitCount = counter.toString().split('');
            document.querySelector('.hand_content.second .numbers-dizaine span').innerHTML = splitCount[0];
            document.querySelector('.hand_content.second .numbers-unite span').innerHTML = splitCount[1];
          }
        }
        if(counter == 25){
          document.querySelector('.hand_content.second').classList.add('countup');
        }
      }, 40);
    }

    var tweenHandOpaSecond = TweenMax.to(document.querySelector('.hand_content.second'), 1, {
      opacity: 1
    });
    var sceneHandOpaSecond = new ScrollMagic.Scene({
      triggerElement: '#triggerSecondarytxt', 
      duration: 300, 
      triggerHook: 0.4
    })
          .setTween(tweenHandOpaSecond)
          .addTo(controller);

    var tweenHandTxtSecond = new ScrollMagic.Scene({
      triggerElement: '#triggerSecondarytxt', 
      duration: 0, 
      triggerHook: 0.5
    })
          .on('start', function () {
            doCount();
          })
          //.setClassToggle('#sblmg .hand_content.second', 'countup')
          .reverse(false)
          .addTo(controller);

    //HAND OUT
    var sceneHandFixedBottom = new ScrollMagic.Scene({
      triggerElement: '.products', 
      duration: 0, 
      triggerHook: 1
    })
          .setClassToggle('.hand_wrapper', 'sblmg-fixed-bottom')
          .addTo(controller);
    //HAND FADE OUT
    var tweenHandBrightless = TweenMax.to(document.querySelector('.hand .hand_wrapper-container'), 1, {
      opacity: 0
    });
    var sceneHandBrightless = new ScrollMagic.Scene({
      triggerElement: '.products', 
      duration:winHalfHeight, 
      triggerHook: 0.7
    })
          .setTween(tweenHandBrightless)
          .addTo(controller);
    //HAND FADE OUT
    // var tweenHandBrightless = TweenMax.to(document.querySelector('.hand svg.is-mobile'), 1, {opacity: 0});
    // var sceneHandBrightless = new ScrollMagic.Scene({triggerElement: '#sblmg .products', duration:winHeight, triggerHook: 1})
    //       .setTween(tweenHandBrightless)
    //       .addTo(controller);


  // ///VIDEO SCROLL
  // ScrollTrigger.create({
  //   trigger: ".reparation",
  //   onEnter: myEnterFunc,
  // });
  // function myEnterFunc(){
  //   ScrollTrigger.refresh();
  // }
  // //console.clear();

  //   const canvas = document.getElementById("hero-lightpass");
  //   const context = canvas.getContext("2d");
  //   const currentFrameDesk = index => (
  //     `https://prd-v3-i.chanel.com/content/dam/fnb/widgets/sblmg_sequence/sblmg_sequence/imgs/desktop/main_${(index + 1).toString().padStart(3, '0')}.jpg`
  //   );
  //   const currentFrameMob = index => (
  //     `https://prd-v3-i.chanel.com/content/dam/fnb/widgets/sblmg_sequence/sblmg_sequence/imgs/mobile/main_${(index + 1).toString().padStart(3, '0')}.jpg`
  //   );

  //   const frameCount = 35;
  //   if(window.innerWidth > 600){
  //     canvas.width = 1280;
  //     canvas.height = 720;
  //   } else {
  //     canvas.width = 720;
  //     canvas.height = 720;
  //   }

  //   const images = []
  //   const airpods = {
  //     frame: 0
  //   };

  //   for (let i = 0; i < frameCount; i++) {
  //     const img = new Image();
  //     if(window.innerWidth > 600){
  //       img.src = currentFrameDesk(i);
  //     } else {
  //       img.src = currentFrameMob(i);
  //     }
  //     images.push(img);
  //   }

  //   gsap.to(airpods, {
  //     frame: frameCount - 1,
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".nuit",
  //       start: "bottom 80%",
  //       end: "+="+winHeight,
  //       scrub: true,
  //       //markers: true,
  //     },

  //     onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
  //   });

  //   images[0].onload = render;

  //   function render() {
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(images[airpods.frame], 0, 0);
  //   }

  //   //FadeOut Video scroll
  //   var tweenVidScrollbirghtLess = TweenMax.to(document.querySelector('.video_scroll'), 1, {filter:'brightness(0)'});
  //   var sceneVidScrollbirghtLess = new ScrollMagic.Scene({triggerElement: '#sblmg .hand', duration:winHalfHeight, triggerHook: 0.9})
  //         .setTween(tweenVidScrollbirghtLess)
  //         .addTo(controller);
  //   //FIXED SCENE REPARATION
  //   var sceneReparationFixed = new ScrollMagic.Scene({triggerElement: '#sblmg .reparation', duration: 0, triggerHook: 0})
  //         .setClassToggle('#sblmg .reparation_wrapper', 'sblmg-fixed')
  //         .on('start', function () {
  //             resizeReparation();
  //         })
  //         .addTo(controller);

  //   //reparation brightness
  //   if(window.innerWidth > 600){
  //   var tweenReparationBright = TweenMax.to(document.querySelector('.reparation img'), 1, {opacity: 1});
  //   var sceneReparationBright = new ScrollMagic.Scene({triggerElement: '#sblmg .reparation', duration:winHeight, triggerHook: 0})
  //         .setTween(tweenReparationBright)
  //         .addTo(controller);

  //   var tweenRepaTxtShowF = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(1)'), 1, {opacity:1});
  //   var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 0.8})
  //         .setTween(tweenRepaTxtShowF)
  //         .addTo(controller);

  //   var tweenRepaTxtShowS = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(2)'), 1, {opacity:1});
  //   var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 0.6})
  //         .setTween(tweenRepaTxtShowS)
  //         .addTo(controller);

  //   var tweenRepaTxtShowT = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(3)'), 1, {opacity:1});
  //   var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 0.4})
  //         .setTween(tweenRepaTxtShowT)
  //         .addTo(controller);
  //   } else {
  //     var tweenReparationBright = TweenMax.to(document.querySelector('.reparation img'), 1, {opacity: 1});
  //     var sceneReparationBright = new ScrollMagic.Scene({triggerElement: '#sblmg .reparation', duration:winHeight, triggerHook: 0})
  //           .setTween(tweenReparationBright)
  //           .addTo(controller);

  //     var tweenRepaTxtShowF = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(1)'), 1, {opacity:1});
  //     var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 1})
  //           .setTween(tweenRepaTxtShowF)
  //           .addTo(controller);

  //     var tweenRepaTxtShowS = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(2)'), 1, {opacity:1});
  //     var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 0.8})
  //           .setTween(tweenRepaTxtShowS)
  //           .addTo(controller);

  //     var tweenRepaTxtShowT = TweenMax.to(document.querySelector('#sblmg .reparation_content p:nth-child(3)'), 1, {opacity:1});
  //     var sceneRepaTxtShow = new ScrollMagic.Scene({triggerElement: '#sblmg #triggerRepatxtF', duration:300, triggerHook: 0.6})
  //           .setTween(tweenRepaTxtShowT)
  //           .addTo(controller);
  //   }
  //   //REPARATION OUT
  //   var sceneReparationFixedBottom = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration: 0, triggerHook: 1})
  //         .setClassToggle('#sblmg .reparation_wrapper', 'sblmg-fixed-bottom')
  //         .addTo(controller);

  //   //Nuit fadeIn
  //   if(window.innerWidth > 600){
  //   var tweenNuitBright = TweenMax.to(document.querySelector('.nuit img'), 1, {opacity: 1});
  //   var sceneNuitBright = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:winHalfHeight*1.5, triggerHook: 0.5})
  //         .setTween(tweenNuitBright)
  //         .addTo(controller);
  //   } else {
  //     var tweenNuitBright = TweenMax.to(document.querySelector('.nuit img'), 1, {opacity: 1});
  //     var sceneNuitBright = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:winHalfHeight, triggerHook: 0})
  //           .setTween(tweenNuitBright)
  //           .addTo(controller);
  //   }
  //   var tweenNuitTitleShow = TweenMax.to(document.querySelector('#sblmg .nuit .col-60 h2'), 1, {opacity:1});
  //   var sceneNuitTitleShow = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:300, triggerHook: 0.7})
  //         .setTween(tweenNuitTitleShow)
  //         .addTo(controller);
  //   var tweenNuitTxtShowF = TweenMax.to(document.querySelector('#sblmg .nuit .col-60 p:nth-child(2)'), 1, {opacity:1});
  //   var sceneNuitTxtShowF = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:300, triggerHook: 0.5})
  //         .setTween(tweenNuitTxtShowF)
  //         .addTo(controller);
  //   var tweenNuitTxtShowS = TweenMax.to(document.querySelector('#sblmg .nuit .col-60 p:nth-child(3)'), 1, {opacity:1});
  //   var sceneNuitTxtShowS = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:300, triggerHook: 0.3})
  //         .setTween(tweenNuitTxtShowS)
  //         .addTo(controller);
  //   var tweenNuitTxtShowT = TweenMax.to(document.querySelector('#sblmg .nuit .col-60 p:nth-child(4)'), 1, {opacity:1});
  //   var sceneNuitTxtShowT = new ScrollMagic.Scene({triggerElement: '#sblmg .nuit', duration:300, triggerHook: 0.1})
  //         .setTween(tweenNuitTxtShowT)
  //         .addTo(controller);

    //nuit out
    var tweenNuitOut = TweenMax.to(document.querySelector('.nuit'), 1, {
      opacity: 0
    });
    var sceneNuitOut = new ScrollMagic.Scene({
      triggerElement: '.video_scroll', 
      duration: winHalfHeight, 
      triggerHook: 0.7
    })
          .setTween(tweenNuitOut)
          .addTo(controller);
    //TP
    var skuCTA = document.querySelectorAll('a[data-sku]');
    skuCTA.forEach((element, i) => {
      let prdName = element.getAttribute('data-seotp');
      let prdSku = element.getAttribute('data-sku');
      element.addEventListener('click', function (event) {

        dataLayer.push({
            'eventCategory':'sublimage extrait de nuit 2023_cta',
            'eventAction':'shop now',
            'eventLabel':prdName+'_'+prdSku,
            'event':'uaevent'
        });

      }, false);
    });
}
//Translate CTA
function translateCTA(){
  let alltxtCTA = document.querySelectorAll('.fnb_quickbuy-btn:not(.img-link)');
  alltxtCTA.forEach((element, i) => {
    if (document.querySelectorAll('header .nav.container .js-cart').length > 0){
        element.innerHTML = element.getAttribute('data-cta-shop');
        //isEcom = true;
      } else {
        element.innerHTML = element.getAttribute('data-cta-discover');
        //isEcom = false;
      }
  });
}

function jqueryLoaded() {
  $(function () {
    // Instance the player
    var moodboardVideoContainer = Array.from(document.querySelectorAll('.akamai-media-player')).filter(s => window.getComputedStyle(s).getPropertyValue('display') != 'none');
    //document.querySelectorAll('#sblmg .akamai-media-player:not([hidden])');
    var videoPlayersList = [];
    function playAMPVideo(videoTarget) {
        var videoId = videoTarget.id;
        var videolink = videoTarget.getAttribute('data-video');

        var config = {
                autoSized: true,
                playbutton: {
                  position: "default",
                  color: "white"
                },
                loader: {
                  type: "default"
                },
                analytics: true,
                captioning: {
                  enabled: true,
                  defaultLang: "en"
                },
                quality: {
                  startLevel: -1
                }
              };

        /* Instance the player */
        player = new Channel_player();
        player.create(videoId, config, videolink, '6057940566001');
        videoPlayersList.push(player);

    }

    moodboardVideoContainer.forEach((element, i) => {
        var containerVideo = element;
        playAMPVideo(containerVideo);
    });
  // End of checkJquery();
  });
}

function checkImg() {
  var topImg = document.querySelector('.intro img');
  if (IsImageOk(topImg)) {
      loadStuff();
  } else {
      window.setTimeout(checkImg, 100);
  }
}
checkImg();

function checkJquery() {
  if (window.jQuery) {
      jqueryLoaded();
  } else {
      window.setTimeout(checkJquery, 100);
  }
}
checkJquery();