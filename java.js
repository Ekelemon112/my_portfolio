const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ------about background image------

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
    });
}, { threshold: 0.3 }); // Trigger when 30% visible

const target = document.getElementById('fadeDiv');
observer.observe(target);

// FormData

(function() {
    emailjs.init("HqgTEFhbYrjaA2AH1"); // Replace with your public key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_c2ffvbl', 'template_l5dye9j', this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });


// Slide-in effect for contact section
 const obServer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 }); // 30% visibility triggers animation

    observer.observe(document.getElementById('slideDiv'));