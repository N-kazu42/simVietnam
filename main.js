// Create a style element for the zoomIn animation, slide styles, and fade-up animation
const style = document.createElement('style');
style.type = 'text/css';
// Append the style to the head
document.head.appendChild(style);

// Add Google Fonts
const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = 'anonymous';
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&family=Rampart+One&family=Zen+Antique&display=swap';
link3.rel = 'stylesheet';
document.head.appendChild(link3);

// JavaScript for handling the slides and fade-up animation
document.addEventListener("DOMContentLoaded", function () {
  // Set body styles
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';

  // Ignore dark mode settings
  const darkModeStyle = document.createElement('style');
  darkModeStyle.textContent = `
    @media (prefers-color-scheme: dark) {
      :root {
        color-scheme: light;
      }
    }
  `;
  document.head.appendChild(darkModeStyle);

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function setResponsiveBackground(slide) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      slide.style.backgroundImage = slide.getAttribute('data-bg-sm');
    } else if (screenWidth < 1024) {
      slide.style.backgroundImage = slide.getAttribute('data-bg-md');
    } else {
      slide.style.backgroundImage = slide.getAttribute('data-bg-lg');
    }
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden");
        slide.classList.add("active");
        setResponsiveBackground(slide);
      } else {
        slide.classList.add("hidden");
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 6000); // 3秒ごとにスライドを切り替える

  // Fade-up animation logic
  const fadeUpElements = document.querySelectorAll('.fade-up');

  function checkFadeUpElements() {
    const windowHeight = window.innerHeight;
    fadeUpElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }

  // Initial check
  checkFadeUpElements();

  // Check on scroll
  window.addEventListener('scroll', checkFadeUpElements);
});
