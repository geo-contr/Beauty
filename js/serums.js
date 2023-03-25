// carousel for large
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


  // Calculate the direction based on the mouse position
  const direction = mousePosition < centerPosition ? 1 : -1;

  // Update the animation duration and direction
  const duration = trackWidth / (speed * 0.05);
  track.style.animationDuration = `${duration}s`;
  track.style.animationDirection = direction > 0 ? 'reverse' : 'normal';
});

slider.addEventListener('mouseleave', () => {
  // Reset the animation to its original values
  track.style.animationDuration = '70s';
  track.style.animationDirection = 'reverse';
});


// const slider = document.querySelector('.carousel_slider');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(document.querySelectorAll('.carousel_slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// slider.addEventListener('mousemove', (event) => {
//   const trackWidth = track.getBoundingClientRect().width;
//   const mousePosition = event.clientX - slider.getBoundingClientRect().left;
//   const centerPosition = slider.getBoundingClientRect().width / 2;

//   // Calculate the distance from the center position
//   const distanceFromCenter = Math.abs(mousePosition - centerPosition);

//   // Calculate the speed based on the distance from the center position
//   const speed = distanceFromCenter / centerPosition * 8000;

//   // Calculate the direction based on the mouse position
//   const direction = mousePosition < centerPosition ? 1 : -1;

//   // Update the animation duration and direction
//   const duration = trackWidth / (speed * 0.05);
//   track.style.animationDuration = `${duration}s`;
//   track.style.animationDirection = direction > 0 ? 'reverse' : 'normal';
// });

// slider.addEventListener('mouseleave', () => {
//   // Reset the animation to its original values
//   track.style.animationDuration = '100s';
//   track.style.animationDirection = 'reverse';
// });

// const slider = document.querySelector('.carousel_slider');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(document.querySelectorAll('.carousel_slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// let currentSpeed = 0;

// slider.addEventListener('mousemove', (event) => {
//   const trackWidth = track.getBoundingClientRect().width;
//   const mousePosition = event.clientX - slider.getBoundingClientRect().left;
//   const centerPosition = slider.getBoundingClientRect().width / 2;

//   // Calculate the speed based on the distance from the center position
//   const speed = Math.log10(Math.abs(mousePosition - centerPosition) + 1) * 300;

//   // Calculate the direction based on the mouse position
//   const direction = mousePosition < centerPosition ? -1 : 1;

//   // Smoothly transition between speeds
//   const speedDiff = speed - currentSpeed;
//   currentSpeed += speedDiff * 0.009;

//   // Change the animation direction based on the mouse position
//   const trackPosition = -(trackWidth - slider.getBoundingClientRect().width) / 2;
//   const mouseDiff = mousePosition - centerPosition;
//   const directionDiff = direction * (Math.abs(mouseDiff) / centerPosition);
//   const trackDiff = directionDiff * trackPosition;
//   const trackPositionDiff = -(trackDiff - mouseDiff);
//   const trackDirection = trackPositionDiff > 0 ? -1 : 1;

//   // Update the animation duration and direction
//   const duration = trackWidth / currentSpeed;
//   track.style.animationDuration = `${duration}s`;
//   track.style.animationDirection = trackDirection > 0 ? 'reverse' : 'normal';
// });

// slider.addEventListener('mouseleave', () => {
//   // Reset the animation to its original values
//   currentSpeed = 0;
//   track.style.animationDuration = '100s';
//   track.style.animationDirection = 'reverse';
// });






// const slider = document.querySelector('.carousel_slider');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(document.querySelectorAll('.carousel_slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// // Initialize the current speed to the default speed
// let currentSpeed = 100;

// slider.addEventListener('mousemove', (event) => {
//   const trackWidth = track.getBoundingClientRect().width;
//   const mousePosition = event.clientX - slider.getBoundingClientRect().left;
//   const centerPosition = slider.getBoundingClientRect().width / 2;

//   // Calculate the distance from the center position
//   const distance = Math.abs(mousePosition - centerPosition);

//   // Calculate the speed based on the distance and direction
//   let speed = 100;
//   if (distance > 0) {
//     speed = Math.log(distance) * 100;
//     if (mousePosition < centerPosition) {
//       speed = -speed;
//     }
//   }

//   // Smoothly transition between speeds
//   const speedDiff = speed - currentSpeed;
//   currentSpeed += speedDiff * 0.005;

//   // Update the animation duration and direction
//   const duration = trackWidth / Math.abs(currentSpeed);
//   track.style.animationDuration = `${duration}s`;
//   track.style.animationDirection = currentSpeed > 0 ? 'normal' : 'reverse';
// });

// // Reset the speed and direction when the mouse leaves the carousel
// slider.addEventListener('mouseleave', () => {
//   currentSpeed = 100;
//   track.style.animationDuration = '100s';
//   track.style.animationDirection = 'reverse';
// });






// const slider = document.querySelector('.carousel_slider');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(document.querySelectorAll('.carousel_slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// // Initialize the current speed to the default speed
// let currentSpeed = 100;

// slider.addEventListener('mousemove', (event) => {
//   const trackWidth = track.getBoundingClientRect().width;
//   const mousePosition = event.clientX - slider.getBoundingClientRect().left;
//   const centerPosition = slider.getBoundingClientRect().width / 2;

//   // Calculate the distance from the center position
//   const distance = Math.abs(mousePosition - centerPosition);

//   // Calculate the speed based on the distance and direction
//   let speed = 100;
//   if (distance > 0) {
//     speed = Math.log(distance) * 100;
//     if (mousePosition < centerPosition) {
//       speed = -speed;
//     }
//   }

//   // Smoothly transition between speeds
//   const speedDiff = speed - currentSpeed;
//   currentSpeed += speedDiff * 0.01;

//   // Update the animation duration and direction
//   const duration = trackWidth / Math.abs(currentSpeed);
//   track.style.animationDuration = `${duration}s`;
//   track.style.animationDirection = currentSpeed > 0 ? 'normal' : 'reverse';
// });

// // Reset the speed and direction when the mouse leaves the carousel
// slider.addEventListener('mouseleave', () => {
//   currentSpeed = 100;
//   track.style.animationDuration = '100s';
//   track.style.animationDirection = 'reverse';
// });

// end fo carousel for large

// with slick slider თუ მინდა სლაიდერი მოძრაობდეს მარცხნიდან მარჯვნივ, მაშინ პლაგინის ფაილში slick.js-ში (ამ შემთხვევაში slickForReverse.js-ში) slideTo = _.currentSlide + _.options.slidesToScroll ვცვლი slideTo = _.currentSlide - _.options.slidesToScroll ანუ .currentSlide + ვცვლი .currentSlide - მინუსით.
$(function () {
  $('.slider_chain').slick({
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows: false,
       autoplay: true,
       autoplaySpeed: 0,
       speed: 5000,
       cssEase: 'linear', /*როცა მინდა გაუჩერებლად, ერთი ტემპით მოძრაობდეს სლაიდერი*/
       waitForAnimate: true,
       infinite: true,
       dots: false,
       draggable: true,
       swipe: true
  });
});
// end of with slick slider
