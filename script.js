
// Simple form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
  
        if (!name || !email || !message) {
          e.preventDefault();
          alert('Please fill out all fields before submitting.');
        }
      });
    }
  });
  