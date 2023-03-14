// $(function() {
//   const $header = $('#lineHeght');
//   let headerHeight = 160,
//       headerSmallHeight = 60;
  
//   $(window).scroll(function() {
//     let scroll = $(window).scrollTop();
//     //if no scroll = show the big header (remove the class)
//     if (scroll === 0) {
//       $header.removeClass('scrolled-down');
//     //if scroll > the height of the big header then add the class
//     } else if(scroll > headerHeight) {
//       $header.addClass('scrolled-down');
//     }
//   });
// });



// scroll lineHeght
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop < 100){
    height = 70;
  }else if(scrollTop > 400){
    height = 250;
  }else{
    height = 150 + 75 * (((scrollTop-200) * 100)/200)/100;
  }
  $('#lineHeght').stop().animate({'height': height+"px"}, 0);
});
// end fo scroll lineHeght


// scroll of indicators
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 7000) {
//         $(".navbutton-ul").addClass("hide");
//     } else {
//         $(".navbutton-ul").removeClass("hide");
//     }
// });


// get the element you want to hide (ობიექტის დამალვა სქროლის დროს კლასის მიღწევისას)
const targetElement = document.querySelector('.navbutton-ul');

// add a 'scroll' event listener to the window object
window.addEventListener('scroll', () => {
  // find the first element with the '.existing-class' class
  const existingElement = document.querySelector('.forNavbutton');
  
  // check if the existing element is visible in the viewport
  if (existingElement && existingElement.getBoundingClientRect().top < window.innerHeight) {
    // hide the target element if the existing element is visible
    targetElement.classList.add('invisible');
  } else {
    // show the target element if the existing element is not visible
    targetElement.classList.remove('invisible');
  }
});
// end of get the element you want to hide



// $(window).scroll(function(){
//   var scrollTop = $(window).scrollTop();
//   if(scrollTop < 200){
//     height = 150;
//   }else if(scrollTop > 400){
//     height = 75;
//   }else{
//     height = 150 - 75 * (((scrollTop-200) * 100)/200)/100;
//   }
//   $('#lineHeght').stop().animate({'height': height+"px"}, 500);
// })


// $(window).scroll(function(){
//   var scrollTop = $(window).scrollTop();
//   if(scrollTop < 200){
//     maxHeight = 150;
//   }else if(scrollTop > 400){
//     maxHeight = 75;
//   }else{
//     maxHeight = 150 - 75 * (((scrollTop-200) * 100)/200)/100;
//   }
//   $('#thediv').stop().animate({'max-height': maxHeight+"px"}, 500);
// })

$(".blemishText2_svg_div").click(function(){
	$(".prepare_div").slideDown(0);
	$(".prepare_div").addClass("show");
	$(".blemishText2_svg_div").addClass("hide");
	$(".blemishText2_svg_div_close").addClass("show");
	$(".blemishText2").addClass("show");
});

$(".blemishText2_svg_div_close").click(function(){
	$(".prepare_div").slideUp(0);
	$(".prepare_div").removeClass("show");
	$(".blemishText2_svg_div").removeClass("hide");
	$(".blemishText2_svg_div_close").removeClass("show");
	$(".blemishText2").removeClass("show");
});

$(".blemishText2_svg_div_target").click(function(){
  $(".target_div").slideDown(0);
  $(".target_div").addClass("show");
  $(".blemishText2_svg_div_target").addClass("hide");
  $(".blemishText2_svg_div_target_close").addClass("show");
  $(".blemishText2_target").addClass("show");
});

$(".blemishText2_svg_div_target_close").click(function(){
  $(".target_div").slideUp(0);
  $(".target_div").removeClass("show");
  $(".blemishText2_svg_div_target").removeClass("hide");
  $(".blemishText2_svg_div_target_close").removeClass("show");
  $(".blemishText2_target").removeClass("show");
});

$(".blemishText2_svg_div_enhance").click(function(){
  $(".enhance_div").slideDown(0);
  $(".enhance_div").addClass("show");
  $(".blemishText2_svg_div_enhance").addClass("hide");
  $(".blemishText2_svg_div_enhance_close").addClass("show");
  $(".blemishText2_enhance").addClass("show");
});

$(".blemishText2_svg_div_enhance_close").click(function(){
  $(".enhance_div").slideUp(0);
  $(".enhance_div").removeClass("show");
  $(".blemishText2_svg_div_enhance").removeClass("hide");
  $(".blemishText2_svg_div_enhance_close").removeClass("show");
  $(".blemishText2_enhance").removeClass("show");
});

$(".blemishText2_svg_div_revive").click(function(){
  $(".revive_div").slideDown(0);
  $(".revive_div").addClass("show");
  $(".blemishText2_svg_div_revive").addClass("hide");
  $(".blemishText2_svg_div_revive_close").addClass("show");
  $(".blemishText2_revive").addClass("show");
});

$(".blemishText2_svg_div_revive_close").click(function(){
  $(".revive_div").slideUp(0);
  $(".revive_div").removeClass("show");
  $(".blemishText2_svg_div_revive").removeClass("hide");
  $(".blemishText2_svg_div_revive_close").removeClass("show");
  $(".blemishText2_revive").removeClass("show");
});

// remove ID on responsive
const mediaQuery = window.matchMedia('(max-width: 767px)')
    
  if (mediaQuery.matches) {

   const box = document.getElementById('prepare');

    console.log(box.getAttribute('id')); // box-1

    box.removeAttribute('id');

    console.log(box.getAttribute('id')); // null


    const box1 = document.getElementById('target');

    console.log(box1.getAttribute('id')); // box-1

    box1.removeAttribute('id');

    console.log(box1.getAttribute('id')); // null


    const box2 = document.getElementById('enhance');

    console.log(box2.getAttribute('id')); // box-1

    box2.removeAttribute('id');

    console.log(box2.getAttribute('id')); // null


    const box3 = document.getElementById('revive');

    console.log(box3.getAttribute('id')); // box-1

    box3.removeAttribute('id');

    console.log(box3.getAttribute('id')); // null
  
  }
   

  // Initialize PureCounter by Default. It also can be stored on variable
        new PureCounter();



  $('#menu-main1').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 0,
      scrollThreshold: 0.5,
      filter: '',
      begin: true /* თუ მინდა სიმაღლე ვაკორექტირო begin: true ვწერ, ასევე css-ში html, body scroll-padding-top - ვუთითებ სიმაღლეს */
      // easing: 'swing'
  });


  

// onePageNav on responsive
// if ($(window).width() < 768) {
//   $('#menu-main1').onePageNav({
//     currentClass: 'active',
//     changeHash: false,
//     scrollSpeed: 0,
//     scrollThreshold: 0.5,
//     filter: '',
//     begin: true
//   });
// } else {
//   $('#menu-main1').onePageNav({
//     currentClass: 'active',
//     changeHash: false,
//     scrollSpeed: 750,
//     scrollThreshold: 0.5,
//     filter: '',
//     begin: true
//   });
// }


// slider with slick slider
// თუ მინდა იყოს შეუჩერებელი მოძრაობა, მაშინ autoplaySpeed: 0, cssEase: 'linear', აგრეთვე თუ მინდა მარცხნიდან მარჯვნივ მოძრაობდეს სლაიდერი: In slick.js, find 'Slick.prototype.autoPlayIterator = function()' Change '+' to '-' in the 'slideTo = _.currentSlide + _.options.slidesToScroll;' ეს ცვლილებაა slick.js-ის კოპირებულ ფაილში slickForReverse.js



// $(function () {
//   $('.slider_chain').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 13000,
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     arrows: false,
//     adaptiveHeight: true,
//     pauseOnFocus: true,
//     pauseOnHover: true
//   });
// });






// const slider = document.querySelector('.carousel_slider');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(document.querySelectorAll('.carousel_slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// slider.addEventListener('mousemove', (event) => {
//   const trackWidth = track.getBoundingClientRect().width;
//   const mousePosition = event.clientX - slider.getBoundingClientRect().left;
//   const centerPosition = slider.getBoundingClientRect().width / 2;

//   // Calculate the speed based on the distance from the center position
//   const speed = Math.abs(mousePosition - centerPosition) / centerPosition * 10000;

//   // Calculate the direction based on the mouse position
//   const direction = mousePosition < centerPosition ? 1 : -1;

//   // Update the animation duration and direction
//   const duration = trackWidth / (speed * 0.05);
//   track.style.animationDuration = `${duration}s`;
//   track.style.animationDirection = direction > 0 ? 'reverse' : 'normal';
// });

// slider.addEventListener('mouseleave', () => {
//   // Reset the animation to its original values
//   track.style.animationDuration = '70s';
//   track.style.animationDirection = 'reverse';
// });




const slider = document.querySelector('.carousel_slider');
const track = document.querySelector('.carousel_track');
const slides = Array.from(document.querySelectorAll('.carousel_slide'));
const slideWidth = slides[0].getBoundingClientRect().width;

slider.addEventListener('mousemove', (event) => {
  const trackWidth = track.getBoundingClientRect().width;
  const mousePosition = event.clientX - slider.getBoundingClientRect().left;
  const centerPosition = slider.getBoundingClientRect().width / 2;

  // Calculate the speed based on the distance from the center position
  const speed = Math.abs(mousePosition - centerPosition) / centerPosition * 10000;

  // Calculate the direction and animation progress based on the mouse position
  let direction, progress;
  if (mousePosition < centerPosition) {
    // Mouse is on the left side of the slider
    direction = 1;
    progress = mousePosition / centerPosition;
  } else {
    // Mouse is on the right side of the slider
    direction = -1;
    progress = (mousePosition - centerPosition) / centerPosition;
  }

  // Update the animation duration and direction based on the speed and progress
  const duration = trackWidth / (speed * 0.05);
  track.style.animationDuration = `${duration}s`;
  track.style.animationDirection = direction > 0 ? 'normal' : 'reverse';
  track.style.animationPlayState = 'running';
  track.style.animationDelay = `${-duration * progress}s`;
});

slider.addEventListener('mouseleave', () => {
  // Reset the animation to its original values
  track.style.animationDuration = '70s';
  track.style.animationDirection = 'reverse';
  track.style.animationPlayState = 'paused';
  track.style.animationDelay = '0s';
});
