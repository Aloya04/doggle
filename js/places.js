// This JavaScript code changes the document title to display a custom message ("Milo Misses You!") 
//when the user switches tabs or loses focus, 
//and restores the original title when the user returns to the tab.


// Get the current document title
let title = document.title;

// Add an event listener for when the window loses focus (e.g., user switches tabs)
window.addEventListener("blur", () => {
    // Change the document title to a custom message when the window loses focus
    document.title = "Milo Misses You!";
});

// Add an event listener for when the window gains focus again
window.addEventListener("focus", () => {
    // Restore the original document title when the window regains focus
    document.title = title;
});

// JavaScript for the Gallery

// Select the gallery container
const slider = document.querySelector('.gallery');

// Variables to track mouse interaction
let isDown = false;
let startX;
let scrollLeft;

// Event listener for when the mouse button is pressed down
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active'); // Add 'active' class for styling purposes
  startX = e.pageX - slider.offsetLeft; // Get the initial X position of the mouse
  scrollLeft = slider.scrollLeft; // Get the initial scroll position of the gallery
});

// Event listener for when the mouse leaves the gallery
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active'); // Remove 'active' class when mouse leaves
});

// Event listener for when the mouse button is released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active'); // Remove 'active' class when mouse button is released
});

// Event listener for when the mouse is moved over the gallery
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Exit if the mouse button is not down
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft; // Get the current X position of the mouse
  const SCROLL_SPEED = 3; // Set the scroll speed factor
  const walk = (x - startX) * SCROLL_SPEED; // Calculate the distance to scroll
  slider.scrollLeft = scrollLeft - walk; // Apply the scroll movement
});

// ======= MAPBOX ========
var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [19.909904815642708, 50.0596891351949], // starting position as [lng, lat] Blonia coordinates
  zoom: 14
});

// Pop-up that displays after clicking the marker
var popup = new mapboxgl.Popup()
.setHTML('<h3>Blonia</h3><p>Huge meadow in the middle of the city</p>');

// Marker
var marker = new mapboxgl.Marker() 
.setLngLat([19.909904815642708, 50.0596891351949])
.setPopup(popup)
.addTo(map);

// ======= POP UP ========
// This JS code listens for clicks on a button and, when clicked, 
// adds the 'open' class to the pop-up, making it visible. 
// Clicking a "Close" button removes the 'open' class, hiding the pop-up. 
// The visibility of the pop-up is controlled by toggling the presence of the 'open' class on the modal element.

const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
})