document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        // Check for brute force attack (just for demonstration)
        if (password.length > 15) {
            alert('Brute force detected! Flag: SHECODE{brute_force_flag}');
            return;
        }
        // Redirect to new page with "Wrong username and password" message
        window.location.href = 'wrong_credentials.html';
    } else {
        alert('Please enter both username and password.');
    }
});
