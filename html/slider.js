window.onload = function () {
  const track = document.getElementById("logoCarouselTrack");
  const trackWidth = track.scrollWidth;
  const logoItems = track.querySelectorAll(".logo-carousel-item");
  let clonedTrack = track.innerHTML;

  // Duplicate the logos to make the scrolling seamless
  track.innerHTML += clonedTrack;

  // Update the keyframes animation dynamically based on the content width
  const keyframes = `
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${trackWidth}px); }
        }
    `;

  // Inject the new keyframes into the stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
};


// Get the menu toggle button and the off-canvas menu container
const menuToggle = document.querySelector('.menu-toggle');
const offCanvas = document.querySelector('.off-canvas');

// Add an event listener to the menu toggle button
menuToggle.addEventListener('click', () => {
  offCanvas.classList.toggle('open');
});