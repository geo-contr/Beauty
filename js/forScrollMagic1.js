var controller = new ScrollMagic.Controller();



  //FADEIN SOMMEIL
    var tweenSommeilIn = TweenMax.to(document.querySelector('.sommeil'), 1, {
      opacity: 1
    });

    var sceneSommeilIn = new ScrollMagic.Scene({
      triggerElement: '#triggerPromiseFadeOut', 
      duration: winHalfHeight, 
      triggerHook: 0
    })
          .setTween(tweenSommeilIn)
          .addTo(controller);

    //sommeil out
    var scenePromiseFixedBottom = new ScrollMagic.Scene({
      triggerElement: '.video_senso', 
      duration: 0, 
      triggerHook: 1
    })
          .setClassToggle('#sblmg .promise-wrapper', 'sblmg-fixed-bottom')
          .addTo(controller);

    //FIXED SCENE SOMMEIL
    var sceneOneFixed = new ScrollMagic.Scene({
      triggerElement: '.promise', 
      duration: 0, 
      triggerHook: 0
    })
          .setClassToggle('.sommeil_wrapper', 'sblmg-fixed')
          .addTo(controller);
          // .setPin("#pin3")

    //Sommeil flacon out
    var tweenFlaconOut = TweenMax.to(document.querySelector('.sommeil_anim_flacon img'), 1, {
      top: 0, 
      filter:'brightness(1)'
    });

    var sceneFlaconOut = new ScrollMagic.Scene({
      triggerElement: '.sommeil', 
      duration: winHeight15, /*'100%'*/
      triggerHook: 0
    })
          .setTween(tweenFlaconOut)
          .addTo(controller);

    //Sommeil trace
    var tweenTraceShow = TweenMax.to(document.querySelector('.sommeil_anim_trace img'), 1, {
      filter:'brightness(1)',
      // opacity: 1
    });

    var sceneTraceShow = new ScrollMagic.Scene({
      triggerElement: '.sommeil', 
      duration: winHeight15, 
      triggerHook: 0.5
    })
          .setTween(tweenTraceShow)
          .addTo(controller);
    //       gsap.registerPlugin(ScrollTrigger);

    // //sommeil hours
    // gsap.set('.nbr_anim .numbers', { 
    //   y: "0%" 
    // })
    // gsap.to('.nbr_anim .numbers', {
    //   y: '-800%',
    //   scrollTrigger: {
    //     trigger: ".sommeil",
    //     start: '0 0',
    //     end: '+='+winHeight15,
    //     scrub: true
    //   }
    // });

    //sommeil "hours" txt
    var tweenTxtShow = TweenMax.to(document.querySelector('.nbr_anim .hour'), 1, {
      opacity:1
    });

    var sceneTxtShow = new ScrollMagic.Scene({
      triggerElement: '#sommeilhourtrigger', 
      duration: 300, 
      triggerHook: 0.35
    })
          .setTween(tweenTxtShow)
          .addTo(controller);

    //sommeil hours additional txt
    var tweenTxtShow = TweenMax.to(document.querySelector('.sommeil_content .txt'), 1, {
      opacity:1
    });

    var sceneTxtShow = new ScrollMagic.Scene({
      triggerElement: '#sommeiltxttrigger', 
      duration: 300, 
      triggerHook: 0.3
    })
          .setTween(tweenTxtShow)
          .addTo(controller);

   //sommeil border bottom flacon
    var sceneSommeilHideBorder = new ScrollMagic.Scene({
      triggerElement: '#sommeiltxttrigger', 
      duration: 0, 
      triggerHook: 0.2
    })
          .setClassToggle('.sommeil_anim_flacon', 'hide-border-bottom')
          .addTo(controller);

    //sommeil show CTA
    var tweenCTASommeil = TweenMax.to(document.querySelector('.sommeil_anim a'), 1, {
      opacity:1
    });

    var sceneCTASommeil = new ScrollMagic.Scene({
      triggerElement: '#sommeiltxttrigger', 
      duration: 20, 
      triggerHook: 0
    })
          .setTween(tweenCTASommeil)
          .addTo(controller);

    // sommeil out
    var sceneSommeilFixedBottom = new ScrollMagic.Scene({
      triggerElement: '.video_senso', 
      duration: 0, 
      triggerHook: 1
    })
          .setClassToggle('.sommeil_wrapper', 'sblmg-sommeil-fixed-bottom')
          .addTo(controller);


    //  //OPAIN VIDEO
    // var tweenOpaVideo = TweenMax.to(document.querySelector('.video_senso .video-container'), 1, {
    //   opacity: 1
    // })
    // var sceneOpaIntroCTA = new ScrollMagic.Scene({
    //   triggerElement: '.video_senso .video-container', 
    //   duration: winHeight, 
    //   triggerHook: 0.45
    // })
    //       .setTween(tweenOpaVideo)
    //       .addTo(controller);


  


   






  