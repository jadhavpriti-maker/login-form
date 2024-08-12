document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        errorMsg.style.display = 'none';
    } else {
        errorMsg.textContent = 'Invalid username or password';
        errorMsg.style.display = 'block';
    }
});
