const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);

showSlide(currentIndex);


document.addEventListener('DOMContentLoaded', function() {
  // Get the file input element
  const fileInput = document.getElementById('file');

  // Get the file name span element
  const fileNameSpan = document.querySelector('.box__file-name');

  // Event listener for file input change
  fileInput.addEventListener('change', function() {
      // Check if files are selected
      if (fileInput.files && fileInput.files.length > 0) {
          // Display the name of the first selected file
          fileNameSpan.textContent = fileInput.files[0].name;
      } else {
          // If no files are selected, display "No file chosen"
          fileNameSpan.textContent = 'No file chosen';
      }
  });

  // Function to clear file name when upload is successful
  function clearFileName() {
      fileNameSpan.textContent = 'No file chosen';
  }

  // Example: Simulating successful upload (You can replace this with your actual upload logic)
  setTimeout(clearFileName, 3000); // Clear file name after 3 seconds (simulating successful upload)
});




// navbar
function getCurrentHour() {
  const date = new Date();
  const hour = date.getHours();
  return hour;
}

const hourElement = document.getElementById('hour');
hourElement.textContent = getCurrentHour();

// JavaScript for Animation
const navbar = document.querySelector('.navbar');
navbar.classList.add('animated');
//end navbar