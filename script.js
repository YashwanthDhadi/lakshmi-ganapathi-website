document.addEventListener('DOMContentLoaded', () => {

  /* ==========================
     SLIDER (HOME PAGE ONLY)
     ========================== */

  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;
  let slideInterval;

  if (slides.length > 0 && nextBtn && prevBtn) {

    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[i].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
      clearInterval(slideInterval);
      startAutoSlide();
    }

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    showSlide(index);
    startAutoSlide();
  }

  /* ==========================
     FADE-IN CONTENT (ALL PAGES)
     ========================== */

  const sections = document.querySelectorAll('.fade-in');

  // SHOW CONTENT IMMEDIATELY
  sections.forEach(sec => {
    sec.classList.add('show');
  });

  // OPTIONAL scroll animation
  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
        sec.classList.add('show');
      }
    });
  });

});
