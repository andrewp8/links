document.addEventListener("DOMContentLoaded", function() {
  var colors = ["red", "green", "blue", "orange"]; // Colors to cycle through
  var index = Math.floor(Math.random() * colors.length); // Random color index
  var box = document.getElementById("title"); // Get the box element

  // Change color after a delay
  setTimeout(function() {
    index = (index + 1) % colors.length; // Cycle through colors
    box.style.backgroundColor = colors[index]; // Change background color
  }, 1000); // Delay in milliseconds
});
