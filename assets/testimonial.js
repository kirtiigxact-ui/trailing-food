document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('[data-testimonial-slider]');

  sliders.forEach((slider) => {
    const track = slider.querySelector('[data-slider-track]');
    const prevButton = slider.querySelector('[data-slider-prev]');
    const nextButton = slider.querySelector('[data-slider-next]');

    if (!track) return;

    const slides = track.querySelectorAll('.testimonial-slide');
    if (slides.length <= 1) {
      if (prevButton) prevButton.setAttribute('disabled', 'disabled');
      if (nextButton) nextButton.setAttribute('disabled', 'disabled');
      return;
    }

    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        update();
      });
    }
  });
});
