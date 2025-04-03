document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.createElement('p');
    const hour = new Date().getHours();
    
    if (hour < 12) {
      greeting.textContent = 'Good morning!';
    } else if (hour < 18) {
      greeting.textContent = 'Good afternoon!';
    } else {
      greeting.textContent = 'Good evening!';
    }
    
    // Append the greeting to the main section
    document.querySelector('main').prepend(greeting);
  });

  const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelector('.download-cv-btn').addEventListener('click', () => {
  console.log('CV download initiated.');
  // You can add analytics tracking or other functions here.
});

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  // Implement AJAX or custom validation logic here
  alert('Your message has been sent!');
  // Reset the form or handle success response as needed
});

