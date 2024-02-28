document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

	if(email === '' || password === '') {
		document.getElementById('loginError').style.display = 'block';
	} else {
        document.getElementById('loginError').style.display = 'none';
        alert('Login successful!'); 
    }
});