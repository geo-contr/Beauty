// carousel for large
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

document.addEventListener("DOMContentLoaded", function() {
    const carouselSlider = document.querySelector('.carousel_slider');
    const carouselTrack = document.querySelector('.carousel_track');
    let isDragging = false;
    let startX, currentX;
    let animationId;
    let speed = 0.7; // Adjust speed as needed
    let isPaused = false;

    function startDrag(e) {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
        currentX = startX;
        cancelAnimationFrame(animationId);
        carouselSlider.classList.add('disable-select');

        // Attach move and end listeners
        document.addEventListener('mousemove', moveDrag);
        document.addEventListener('touchmove', moveDrag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function endDrag() {
        isDragging = false;
        carouselSlider.classList.remove('disable-select');

        // Remove move and end listeners
        document.removeEventListener('mousemove', moveDrag);
        document.removeEventListener('touchmove', moveDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);

        if (!isPaused) {
            requestAnimationFrame(animate);
        }
    }

    function moveDrag(e) {
        if (!isDragging) return;
        const newX = e.pageX || e.touches[0].pageX;
        const diffX = newX - currentX;
        currentX = newX;

        carouselTrack.style.transform = `translateX(${parseFloat(carouselTrack.style.transform.replace('translateX(', '').replace('px)', '')) + diffX}px)`;
        handleInfiniteScroll();
    }

    function handleInfiniteScroll() {
        const trackRect = carouselTrack.getBoundingClientRect();
        const trackWidth = trackRect.width;
        let currentTranslateX = parseFloat(carouselTrack.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        if (currentTranslateX < -trackWidth / 2) {
            currentTranslateX += trackWidth;
        } else if (currentTranslateX > 0) {
            currentTranslateX -= trackWidth / 2;
        }

        carouselTrack.style.transform = `translateX(${currentTranslateX}px)`;
    }

    function animate() {
        if (isPaused || isDragging) return;

        let currentTranslateX = parseFloat(carouselTrack.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        currentTranslateX += speed;

        carouselTrack.style.transform = `translateX(${currentTranslateX}px)`;
        handleInfiniteScroll();

        animationId = requestAnimationFrame(animate);
    }

    // Prevent images from interfering with dragging
    const images = document.querySelectorAll('.carousel_slide');
    images.forEach(image => {
        image.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        image.addEventListener('mouseenter', function() {
            isPaused = true;
            cancelAnimationFrame(animationId);
        });

        image.addEventListener('mouseleave', function() {
            isPaused = false;
            if (!isDragging) {
                requestAnimationFrame(animate);
            }
        });
    });

    carouselSlider.addEventListener('mousedown', startDrag);
    carouselSlider.addEventListener('touchstart', startDrag);

    // Start the animation
    requestAnimationFrame(animate);
});



  // Scroll reveal
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
  // End of scroll reveal




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


// carousel for mobile view
// const slider1 = document.querySelector('.slider_chain');
// const track1 = document.querySelector('.slider_track');
// const slides1 = Array.from(document.querySelectorAll('.slider_item'));
// const slideWidth1 = slides[0].getBoundingClientRect().width;

// slider1.addEventListener('touchmove', (event) => {
//   const trackWidth = track1.getBoundingClientRect().width;
//   const touchPosition = event.touches[0].clientX - slider1.getBoundingClientRect().left;
//   const centerPosition = slider1.getBoundingClientRect().width / 2;

//   // Calculate the speed based on the distance from the center position
//   const speed = Math.abs(touchPosition - centerPosition) / centerPosition * 2000;


//   // Calculate the direction based on the touch position
//   const direction = touchPosition < centerPosition ? 1 : -1;

//   // Update the animation duration and direction
//   const duration = trackWidth / (speed * 0.05);
//   track1.style.animationDuration = `${duration}s`;
//   track1.style.animationDirection = direction > 0 ? 'reverse' : 'normal';
// });

// slider1.addEventListener('touchend', () => {
//   // Reset the animation to its original values
//   track1.style.animationDuration = '100s';
//   track1.style.animationDirection = 'reverse';
// });


// const slider1 = document.querySelector('.slider_chain');
// const track1 = document.querySelector('.slider_track');
// const slides1 = Array.from(document.querySelectorAll('.slider_item'));
// const slideWidth1 = slides[0].getBoundingClientRect().width;
// let speed1 = 2000; // initial speed
// let direction1 = -1; // initial direction

// slider1.addEventListener('touchstart', (event) => {
//   const touchPosition = event.touches[0].clientX - slider1.getBoundingClientRect().left;
//   const centerPosition = slider1.getBoundingClientRect().width / 2;

//   // Calculate the direction based on the touch position
//   direction1 = touchPosition < centerPosition ? 1 : -1;

//   // Set a fixed animation speed
//   speed1 = 2000;

//   // Update the animation duration and direction
//   const duration = track1.getBoundingClientRect().width / (speed1 * 0.3);
//   track1.style.animationDuration = `${duration}s`;
//   track1.style.animationDirection = direction1 > 0 ? 'reverse' : 'normal';
// });

// slider1.addEventListener('touchmove', (event) => {
//   // Prevent default touchmove behavior
//   event.preventDefault();

//   // Update the animation duration and direction
//   const duration = track1.getBoundingClientRect().width / (speed1 * 0.3);
//   track1.style.animationDuration = `${duration}s`;
//   track1.style.animationDirection = direction1 > 0 ? 'reverse' : 'normal';
// });

// slider1.addEventListener('touchend', () => {
//   // Reset the animation to its original values
//   track1.style.animationDuration = '70s';
//   track1.style.animationDirection = 'reverse';
// });

// end of carousel for mobile view

// with slick slider თუ მინდა სლაიდერი მოძრაობდეს მარცხნიდან მარჯვნივ, მაშინ პლაგინის ფაილში slick.js-ში (ამ შემთხვევაში slickForReverse.js-ში) slideTo = _.currentSlide + _.options.slidesToScroll ვცვლი slideTo = _.currentSlide - _.options.slidesToScroll ანუ .currentSlide + ვცვლი .currentSlide - მინუსით.
// $(function () {
//   $('.slider_chain').slick({
//        slidesToShow: 2,
//        slidesToScroll: 1,
//        arrows: false,
//        autoplay: true,
//        autoplaySpeed: 0,
//        speed: 2000,
//        cssEase: 'linear', /*როცა მინდა გაუჩერებლად, ერთი ტემპით მოძრაობდეს სლაიდერი*/
//        waitForAnimate: true,
//        infinite: true,
//        dots: false,
//        draggable: true,
//        swipe: true
//   });
// });
// end of with slick slider



// animation on scroll
// window.addEventListener('scroll', reveal);

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 0;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }
// end of animation on scroll
