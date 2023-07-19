
 $("#intro-btn-unpressed, .scrolldown-arrow").on("click", function () {
    $("html, body").animate({ 
        scrollTop: document.querySelector(".nails-container").offsetTop -50
      }, 1000)
    })


    gsap.registerPlugin(ScrollTrigger);


    gsap.timeline({
      scrollTrigger: {
        trigger: ".nails-intro",
        pin: true,
        start: "bottom bottom",
        end: "+=1000",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          currentDirection = self.direction
        },
      },
    })



    // gsap.to(".nails-intro img", { y: "0%", duration: 0.6 })
    //     gsap.add(function () {
    //       if (currentDirection == 1) {
    //         $("#intro-btn-unpressed").addClass("is-not-visible")
    //       } else {
    //         $("#intro-btn-unpressed").removeClass("is-not-visible")
    //       }
    //     })
    //     gsap.to(".nails-intro img", { y: "0%", duration: 0.08 })
    //     gsap.to(".nails-intro img", { y: "100%", duration: 0.8 })
    //   } else {
    //     $(".nails-intro").remove()
    //   }


    




    
    gsap.set('.nails-intro img', { 
      y: "-20%", duration: 0.6
    })
    gsap.to('.nails-intro img', {
      y: '120%',
      scrollTrigger: {
        trigger: ".nails-intro",
        start: "bottom bottom",
        end: '+=500',
        scrub: 1

      }
    })


     // $(".nails-plus").on("click", function () {
     //    dataLayer.push({
     //      eventCategory: "nails 2023_cta",
     //      eventAction: "see more",
     //      eventLabel: "LE VERNIS",
     //      event: "uaevent",
     //    })
     //  })


    
