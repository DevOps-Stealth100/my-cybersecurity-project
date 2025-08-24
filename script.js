document.addEventListener('DOMContentLoaded', () => {
  // Toggle about section
  document.querySelectorAll('.about-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const aboutSection = document.querySelector('#about-text');
      if (aboutSection) {
        aboutSection.classList.toggle('hidden');
        button.textContent = aboutSection.classList.contains('hidden') ? 'About This Site' : 'About This Site';
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('script loaded!');
});