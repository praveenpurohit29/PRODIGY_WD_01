document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Hide more authors initially
    document.getElementById('more-authors').style.display = 'none';

    // Toggle more authors visibility when button is clicked
    document.getElementById('more-authors-btn').addEventListener('click', function() {
        var moreAuthors = document.getElementById('more-authors');
        if (moreAuthors.style.display === 'none') {
            moreAuthors.style.display = 'block';
            this.textContent = 'Less'; // Change button text to "Less" when showing more authors
        } else {
            moreAuthors.style.display = 'none';
            this.textContent = 'More'; // Change button text back to "More" when hiding authors
        }
    });
});


  // Function to show all books
  function showAllBooks() {
    var books = document.querySelectorAll('.book');

    // Show all books
    books.forEach(function(book) {
        book.style.display = 'block';
    });
}

// Function to filter books based on genre
function filterBooks(genre) {
    var books = document.querySelectorAll('.book');

      // Hide all books
      books.forEach(function(book) {
        book.style.display = 'none';
    });

    // Show books of selected genre
    books.forEach(function(book) {
        var bookGenre = book.querySelector('p').innerText.toLowerCase();
        if (bookGenre.includes('genre: ' + genre)) {
            book.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Select all book images
    var bookImages = document.querySelectorAll('.book-info img');

    // Loop through each book image and attach a click event
    bookImages.forEach(function(img) {
        img.addEventListener('click', function(event) {
            // Prevent default behavior of the link
            event.preventDefault();

            // Get the href attribute of the parent anchor tag (which is the PDF file path)
            var pdfPath = img.parentElement.getAttribute('href');

            // Open the PDF in a new tab
            window.open(pdfPath, '_blank');
        });
    });
});