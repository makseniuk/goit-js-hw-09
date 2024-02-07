document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.email.value = savedData.email || '';
  form.message.value = savedData.message || '';

  form.addEventListener('input', function (event) {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      const currentState =
        JSON.parse(localStorage.getItem('feedback-form-state')) || {};
      currentState[event.target.name] = event.target.value.trim();
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email && message) {
      console.log({
        email,
        message,
      });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both email and message fields before submitting.');
    }
  });
});