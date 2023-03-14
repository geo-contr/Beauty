





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

  // Calculate the direction based on the mouse position
  const direction = mousePosition < centerPosition ? -1 : 1;

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
