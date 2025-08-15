document.addEventListener('DOMContentLoaded', function() {
  // Existing About Section elements
  const aboutSection = document.querySelector('.about-section');
  const aboutMeBtn = document.querySelector('.about-me-btn');
  const xIcon = document.querySelector('.x-icon');
  const overlay = document.querySelector('.about-overlay');

  // Latest Works button
  const latestWorksBtn = document.querySelector('.latest-works-link');
  
  // Open About Section (existing functionality)
  if (aboutMeBtn) {
    aboutMeBtn.addEventListener('click', function() {
      aboutSection.classList.add('active');
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close About Section (existing functionality)
  function closeAboutSection() {
    aboutSection.classList.remove('active');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (xIcon) xIcon.addEventListener('click', closeAboutSection);
  if (overlay) overlay.addEventListener('click', closeAboutSection);

  // New Latest Works scroll functionality
  if (latestWorksBtn) {
    latestWorksBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default if it's a link
      
      // Scroll down by 300px (adjust this value as needed)
      window.scrollBy({
        top: 600,
        behavior: 'smooth'
      });
      
      // Alternative: Scroll to specific section if you prefer
      // const workSection = document.querySelector('.work-section');
      // if (workSection) {
      //   workSection.scrollIntoView({ behavior: 'smooth' });
      // }
    });
  }
});

document.querySelector('.resume-btn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // path to your PDF file
  link.download = 'Anushka_Wable_Resume.pdf'; // filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
