let currentSlide = 0;

const slider = document.querySelector(".comments-slider");
const wrapper = document.querySelector(".comments-slider__wrapper");
const slides = document.querySelectorAll(".comments-slider__item");

slider.addEventListener("click", (e) => {
  const arrow = e.target.closest(".comments-slider__arr");
  if (!arrow) return;

  if (arrow.classList.contains("comments-slider__arr-right")) {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = slides.length - 1;
    }
  }

  if (arrow.classList.contains("comments-slider__arr-left")) {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = 0;
    }
  }

  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
});