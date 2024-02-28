
document.getElementById('registrationForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission to validate first

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var errorElement = document.getElementById('loginError');

	errorElement.style.display = 'none';
	errorElement.textContent = '';

	if (password.length < 6) {
		errorElement.textContent += 'Password must be at least 6 characters long.';
		errorElement.style.display = 'block';
	}

	if (email.includes('@') && password.length >= 6) {

		alert('All set!');
		window.location.href = 'login.html'
	}
});
