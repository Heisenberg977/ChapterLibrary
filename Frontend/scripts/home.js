async function fetchAllBooks() {
  try {
    const response = await fetch('http://127.0.0.1/5500/books');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const bookSections = document.querySelectorAll('.books .book');

    data.forEach((book, index) => {
      const bookInfoContainer = bookSections[index];

      const titleElement = bookInfoContainer.querySelector('.title');
      const authorElement = bookInfoContainer.querySelector('.author');
      const bioElement = bookInfoContainer.querySelector('.bio');

      // Update content instead of creating new elements
      titleElement.textContent = book.title;
      authorElement.textContent = book.author;
      bioElement.textContent = book.bio;
    });
  } catch (error) {
    console.error('Error fetching all books:', error);
  }
}

// Call the fetch function to populate the UI with book information
fetchAllBooks();


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
