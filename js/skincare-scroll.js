
    window.addEventListener("load", function (event) {
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

        if (!isMobile) {
            isMobile = /iPhone|iPad|iPod/i.test(navigator.platform);
        }

        if ($('body').hasClass('language-ar_ME')) {
            $('#part-1-image-1').attr()
            $('#part-2-image-2').attr()
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

        if (!isMobile) {
            var imgParallax1 = new ScrollMagic.Scene({
                triggerHook: .95,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 1.6
            })
                .setTween("#part-1-image-1", {
                    y: -240,
                })
                .addTo(controller);

            var imgParallax2 = new ScrollMagic.Scene({
                triggerHook: .95,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 1.6
            })
                .setTween("#part-1-image-2", {
                    y: -240,
                })
                .addTo(controller);

            var imgParallax3 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.7
            })
                .setTween("#part-1-image-3", {
                    y: -240,
                })
                .addTo(controller);

            var imgParallax4 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.7
            })
                .setTween("#part-1-image-4", {
                    y: -240,
                })
                .addTo(controller);

            var imgParallax5 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.3
            })
                .setTween("#part-1-image-5", {
                    y: -260,
                })
                .addTo(controller);

            var imgParallax6 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.3
            })
                .setTween("#part-1-image-6", {
                    y: -260,
                })
                .addTo(controller);

            var imgParallax7 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.18
            })
                .setTween("#part-1-image-7", {
                    y: -300,
                })
                .addTo(controller);

            var imgParallax8 = new ScrollMagic.Scene({
                triggerHook: .55,
                triggerElement: ('#summer-xxl-content'),
                duration: $(window).height() / 0.18
            })
                .setTween("#part-1-image-8", {
                    y: -300,
                })
                .addTo(controller);
        };


        if (!isMobile) {
            var scene = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 0.75
            })
                .setTween("#pink-square", {
                    scale: 6,
                })
                .setPin("#summer-xxl-intro")
                .addTo(controller);
        } else {
            var scene = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: "body",
                duration: $(window).height() * 0.75
            })
                .setTween("#pink-square", {
                    scale: 8,
                })
                .setPin("#summer-xxl-intro")
                .addTo(controller);
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


