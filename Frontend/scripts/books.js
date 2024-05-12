document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var initialBackgroundColor = "rgba(0, 0, 0, 0)"; // Set your initial background color
    var scrolledBackgroundColor = "rgba(255, 140, 0, 0.9)"; // Set your scrolled background color (orange in rgba format)
    var transitionStart = 50; // Adjust this value as needed
    var transitionEnd = 200; // Adjust this value as needed
  
    function updateNavbarBackground() {
      var scrollY = window.scrollY || window.pageYOffset;
      var alpha = (scrollY - transitionStart) / (transitionEnd - transitionStart);
  
      if (alpha >= 0 && alpha <= 1) {
        var blendedColor = "rgba(255, 140, 0, " + alpha + ")";
        navbar.style.background = blendedColor;
      } else if (scrollY > transitionEnd) {
        navbar.style.background = scrolledBackgroundColor;
      } else {
        navbar.style.background = initialBackgroundColor;
      }
    }
  
    // Initial call to set the background based on the page load position
    updateNavbarBackground();
  
    // Add scroll event listener
    window.addEventListener("scroll", function() {
      updateNavbarBackground();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
      var navbar = document.getElementById("navbar");
      var body = document.body;
  
      function updateNavbarBackground() {
          var scrollY = window.scrollY || window.pageYOffset;
          var isScrolled = scrollY > 0;
  
          if (isScrolled) {
              body.classList.add("scrolled");
          } else {
              body.classList.remove("scrolled");
          }
      }
  
      // Initial call to set the background based on the page load position
      updateNavbarBackground();
  
      // Add scroll event listener
      window.addEventListener("scroll", function() {
          updateNavbarBackground();
      });
  });
  