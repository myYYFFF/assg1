// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields before submitting.');
    } else {
        // If everything is filled, show a thank you alert
        alert('Thank you for your message, ' + name + '!');
    }
});
