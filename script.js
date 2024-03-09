let attempts = 0;
const maxAttempts = 20; // Maximum number of attempts
const windowDuration = 30000; // 30 seconds in milliseconds

setInterval(() => {
    attempts = 0; // Reset attempts count every 30 seconds
}, windowDuration);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    attempts++;

    if (username && password) {
        // Check for brute force attack (exceeding number of attempts within 30 seconds)
        if (attempts > maxAttempts) {
            window.location.href = 'bruteforce_detected.html'; // Redirect to brute force detected page
            return;
        }
        // Simulate incorrect login
        const message = document.createElement('div');
        message.innerText = 'Wrong username or password. Please try again.';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.backgroundColor = '#fff';
        message.style.padding = '10px';
        message.style.border = '2px solid #f00';
        message.style.borderRadius = '5px';
        message.style.zIndex = '9999';
        document.body.appendChild(message);

        // Automatically close the popup after 3 seconds
        setTimeout(() => {
            document.body.removeChild(message);
        }, 3000);

        // Clear the password field
        document.getElementById('password').value = '';
    } else {
        alert('Please enter both username and password.');
    }
});
