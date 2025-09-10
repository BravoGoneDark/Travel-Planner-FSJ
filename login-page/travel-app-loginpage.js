//prevent default form submission for demo

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.login-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // You can add login logic here
      alert('Login submitted!');
    });
  }
});
