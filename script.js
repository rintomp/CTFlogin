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
        alert('Wrong username or password. Please try again.');
        // Clear the password field
        document.getElementById('password').value = '';
    } else {
        alert('Please enter both username and password.');
    }
});
