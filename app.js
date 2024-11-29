let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  

let currentIndex = 0;
const boxes = document.querySelectorAll('.box');
const carousel = document.querySelector('.carousel');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
let translateProjectBox = (window.innerWidth <= 500) ? 320 : 400;

function onResize() {
    if (currentIndex < boxes.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
  }
  translateProjectBox = (window.innerWidth <= 500) ? 320 : 400;
  updateCarousel();
}

window.addEventListener('resize', onResize);

  function updateCarousel() {
      carousel.style.transform = `translateX(${-currentIndex * translateProjectBox}px)`;
      boxes.forEach((box, index) => {
          let pos = index - currentIndex;
          if (pos < -3) pos += boxes.length;
          if (pos > 3) pos -= boxes.length;
          box.dataset.pos = pos;
      });
  }

  leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = boxes.length - 1;
      }
      updateCarousel();
  });

  rightBtn.addEventListener('click', () => {
      if (currentIndex < boxes.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateCarousel();
  });  