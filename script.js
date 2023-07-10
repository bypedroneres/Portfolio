// Get the dot menu and gallery images
const dotMenu = document.querySelector('.dot-menu');
const galleryImages = document.querySelectorAll('.gallery-image');

// Add click event listener to each dot
dotMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    // Remove active class from all dots
    dotMenu.querySelectorAll('.dot').forEach((dot) => {
      dot.classList.remove('active');
    });

    // Add active class to the clicked dot
    event.target.classList.add('active');

    // Get the index of the clicked dot
    const dotIndex = Array.from(dotMenu.children).indexOf(event.target);

    // Display the corresponding gallery image
    galleryImages.forEach((image, index) => {
      if (index === dotIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }
});
