// This JavaScript code changes the document title to display a custom message ("Milo Misses You!" 
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


//This JavaScript code creates a sticky header that becomes fixed at the top of the page when the user scrolls down, 
//and returns to its normal position when scrolling back up.

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
