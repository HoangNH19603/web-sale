const onclickLogin = () => {
	let myUsername = 'admin';
	let myPassword = 'admin';

	let username = document.getElementById("username").value;
	let password = document.getElementById('password').value;

	if(username === myUsername  && password === myPassword) {
		window.open("HomePage.html", "_self");
	} else {
		document.getElementById("alert").innerHTML = "Username or password is incorrect!"
	}
}