let attempts = 0;
const maxAttempts = 30; 
const windowDuration = 30000; 
setInterval(() => {
    attempts = 0; 
}, windowDuration);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    attempts++;

    if (username && password) {
       
        if (attempts > maxAttempts) {
            window.location.href = 'bruteforce_detected.html'; 
            return;
        }
        
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

        
        setTimeout(() => {
            document.body.removeChild(message);
        }, 1000);
    } else {
        alert('Please enter both username and password.');
    }
});
