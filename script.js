// Get the dot menu and gallery images for the photo gallery
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

// Get the dot menu and book covers for the book gallery
const dotMenu2 = document.querySelector('.dot-menu2');
const bookCovers = document.querySelectorAll('.book-covers');

// Add click event listener to each dot
dotMenu2.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot2')) {
    // Remove active class from all dots
    dotMenu2.querySelectorAll('.dot2').forEach((dot) => {
      dot.classList.remove('active');
    });

    // Add active class to the clicked dot
    event.target.classList.add('active');

    // Get the index of the clicked dot
    const dotIndex = Array.from(dotMenu2.children).indexOf(event.target);

    // Display the corresponding book cover
    bookCovers.forEach((cover, index) => {
      if (index === dotIndex) {
        cover.style.display = 'block';
      } else {
        cover.style.display = 'none';
      }
    });
  }
});

/*
// Loading screen and language change code
const delay = 8000; // 3 seconds

const languages = [
    { code: 'en', name: 'English', greeting: 'Hello!' },
    { code: 'pt', name: 'Portuguese', greeting: 'Olá!' },
    { code: 'ko', name: 'Korean', greeting: '안녕하세요!' },
    { code: 'de', name: 'German', greeting: 'Hallo!' },
    { code: 'es', name: 'Spanish', greeting: 'Hola!' },
    { code: 'it', name: 'Italian', greeting: 'Ciao!' },
    { code: 'fr', name: 'French', greeting: 'Bonjour!' },
];

let currentLanguageIndex = 0;

function showContent() {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');

    loadingScreen.style.display = 'none';
    content.style.display = 'block';
}

function changeLanguage() {
    const greetingElement = document.querySelector('.greeting');
    greetingElement.textContent = languages[currentLanguageIndex].greeting;

    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
}

setTimeout(showContent, delay);
setInterval(changeLanguage, 1000); // Change language every 1.5 seconds
*/