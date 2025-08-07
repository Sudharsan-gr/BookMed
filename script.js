document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const doctor = document.getElementById('doctor').value.trim();
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value.trim();

    // Basic validations
    if (!name || !contact || !doctor || !time || !reason) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    // If all valid
    alert(`Appointment booked successfully for ${name}!`);

    // Reset form
    form.reset();
  });
});
