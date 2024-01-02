    window.addEventListener("load", function (event) {
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

        if (!isMobile) {
            isMobile = /iPhone|iPad|iPod/i.test(navigator.platform);
        }

        if ($('body').hasClass('language-ar_ME')) {
            $('#part-1-image-1').attr('src', 'img/7656.webp')
            $('#part-2-image-2').attr('src', 'img/9876.webp')
        }

        $('.js-cart').length == 1 ? $('.discover-cta').remove() : $('.order-cta').remove()

        !isMobile ? $('#summer-xxl-intro').height($(window).height() - $('nav').height()) : $('#summer-xxl-intro').height($(window).height() - $('header').height())

        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                reverse: true
            }
        });

        $('[data-bloc]').on('click', function () {
            dataLayer.push({
                'eventCategory': 'les beiges summer xxl 2022_cta',
                'eventAction': $(this).attr('data-bloc') + '_shop now',
                'eventLabel': $(this).attr('data-name') + '_' + $(this).attr('data-id'),
                'event': 'uaevent'
            });
        })

        // if (!isMobile) {
        //     var imgParallax1 = new ScrollMagic.Scene({
        //         triggerHook: .95,
        //         triggerElement: ('#summer-xxl-content'),
        //         duration: $(window).height() / 1.6
        //     })
        //         .setTween("#part-1-image-1", {
        //             y: -400,
        //         })
        //         .addTo(controller);

        //     var imgParallax2 = new ScrollMagic.Scene({
        //         triggerHook: .95,
        //         triggerElement: ('#summer-xxl-content'),
        //         duration: $(window).height() / 2.2
        //     })
        //         .setTween("#part-1-image-2", {
        //             y: -140,
        //         })
        //         .addTo(controller);

        //     var imgParallax3 = new ScrollMagic.Scene({
        //         triggerHook: .55,
        //         triggerElement: ('.summer-xxl-part-2'),
        //         duration: $(window).height() / 1.2
        //     })
        //         .setTween(".video-product", {
        //             y: 0,
        //         })
        //         .addTo(controller);

        //     var imgParallax4 = new ScrollMagic.Scene({
        //         triggerHook: 1,
        //         triggerElement: ('#part-3-image-2'),
        //         duration: $(window).height() / 1.5
        //     })
        //         .setTween("#part-3-image-2", {
        //             y: 0,
        //         })
        //         .addTo(controller);

        //     var imgParallax4 = new ScrollMagic.Scene({
        //         triggerHook: 1,
        //         triggerElement: ('#part-4-image-2'),
        //         duration: $(window).height() / 1.75
        //     })
        //         .setTween("#part-4-image-2", {
        //             y: 0,
        //         })
        //         .addTo(controller);
        // };

        const mediaQuery = window.matchMedia('(min-width: 992px)')
        if (mediaQuery.matches) {


        if (!isMobile) {
            var scene = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 2
            })
                .setTween("#pink-square", {
                    scale: .6,
                    delay: 2
                })
                .setPin("#summer-xxl-intro")
                .addTo(controller);
        } else {
            var scene = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 2
            })
                .setTween("#pink-square", {
                    scale: 1,
                    delay: 2
                })
                .setPin("#summer-xxl-intro")
                .addTo(controller);
        }

        if (!isMobile) {
            var scene1 = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 2,
            })
                .setTween("#pink-square1", {
                    scale: .24,
                    delay: .3,
                    opacity: 1
                })
                .setPin("#summer-xxl-intro1")
                .addTo(controller);
        } else {
            var scene1 = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 2,
            })
                .setTween("#pink-square1", {
                    scale:.24,
                    delay: .3,
                    opacity: 1
                })
                .setPin("#summer-xxl-intro1")
                .addTo(controller);
        }

        if (!isMobile) {
            var scene2 = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 0.75,
            })
                .setTween("#pink-square2", {
                    // scale: .3,
                    opacity: 0
                })
                .setPin("#summer-xxl-intro2")
                .addTo(controller);
        } else {
            var scene2 = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 0.75,
            })
                .setTween("#pink-square2", {
                    // scale:.3
                    opacity: 0
                })
                .setPin("#summer-xxl-intro2")
                .addTo(controller);
        };
    }

        

        










        // var scene2 = new ScrollMagic.Scene({
        //     triggerHook: 0.9,
        //     triggerElement: ".summer-xxl-part-1",
        //     duration: 400
        //   })
        //   .setTween(".summer-xxl-part-1", {
        //     opacity: 1,
        //   })
        //   .addTo(controller);

        // var scene3 = new ScrollMagic.Scene({
        //     triggerHook: 0.9,
        //     triggerElement: ".summer-xxl-part-2",
        //     duration: 400
        //   })
        //   .setTween(".summer-xxl-part-2", {
        //     opacity: 1,
        //   })
        //   .addTo(controller);

        // var scene4 = new ScrollMagic.Scene({
        //     triggerHook: 0.9,
        //     triggerElement: ".summer-xxl-part-3",
        //     duration: 400
        //   })
        //   .setTween(".summer-xxl-part-3", {
        //     opacity: 1,
        //   })
        //   .addTo(controller);

        // var scene5 = new ScrollMagic.Scene({
        //     triggerHook: 0.9,
        //     triggerElement: ".summer-xxl-part-4",
        //     duration: 400
        //   })
        //   .setTween(".summer-xxl-part-4", {
        //     opacity: 1,
        //   })
        //   .addTo(controller);

        window.Hls = Hls;

        // hack to prevent loading HLS via akamai loader
        var akamaiResources = window.akamai.amp.AMP.addResources.bind(window.akamai.amp.AMP);
        window.akamai.amp.AMP.addResources = function (resources, callback, onerror) {
            if (resources[0].src.indexOf('hls') > -1) {
                return akamaiResources([], callback, onerror);
            }
            return akamaiResources(resources, callback, onerror);
        };

        // Instance the player
        var moodboardVideoContainer = $('.videoToLoad');
        var videoPlayersList = [];

        function playAMPVideo(videoTarget) {
            var videoId = videoTarget.attr('id'),
                videolink = videoTarget.attr('videoId'),
                videolinkMobile = videoTarget.attr('videoIdMobile')

            var config = {
                "fluidLoop": true,
                "loop": true,
                "autoplay": true,
                "mute": true,
                "videoCentered": true,
                "autoSized": true,
                "hd": true,
                "hideSound": true,
                "controls": {
                    "mode": "none"
                },
            };

            /* Instance the player */
            player = new Channel_player();

            //Extends Class JS
            if (typeof GenerateConfig === 'function') {
                GenerateConfig.inherits(Channel_player);
                GenerateConfig.call(this);

                player.listenAndcapture();

                player.click_handler('reload');
                player.click_handler('play');
                player.click_handler('pause');
                player.click_handler('fullscreen');
                player.click_handler('mute');
                player.click_handler('destroy');
            }

            if (!isMobile) {
                player.create(videoId, config, videolink, '6057940566001');
            } else {
                player.create(videoId, config, videolinkMobile, '6057940566001');
            }

            videoPlayersList.push(player);
        }

        moodboardVideoContainer.each(function () {
            var containerVideo = $(this);
            playAMPVideo(containerVideo);
        });


    });



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





    $(".bb-more-btn").click(function(){
        $(".content_full").toggleClass("visible");
        $("html").toggleClass("fixed");
    });




    // animation on scroll
    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal1');

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


    window.addEventListener('scroll', reveal1);

    function reveal1(){
        var reveals = document.querySelectorAll('.reveal2');

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
        };
    }
    // end of animation on scroll






    

    
