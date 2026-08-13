document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-patient-form');
  const formContent = document.getElementById('np-form-content');
  const formSuccess = document.getElementById('np-form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload

      // In a real application, you would send the form data to a server here.
      // For the prototype, we simply show the success message.
      
      formContent.style.display = 'none';
      formSuccess.style.display = 'flex';
    });
  }
});
