// Create a style element for the zoomIn animation, slide styles, and fade-up animation
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
@keyframes zoomIn {
  from {
    background-size: 100%;
  }
  to {
    background-size: 110%;
  }
}

.slide {
  background-size: 100%;
  background-position: center;
  min-width: 100%; /* コンテナの高さを100%に設定 */
}

.slide.active {
  animation: zoomIn 3s ease-in-out forwards;
}

.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
`;

// Append the style to the head
document.head.appendChild(style);

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
  setInterval(nextSlide, 3000); // 3秒ごとにスライドを切り替える

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
