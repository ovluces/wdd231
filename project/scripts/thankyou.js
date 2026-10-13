const params = new URLSearchParams(window.location.search);
document.getElementById("name").innerHTML = params.get('name');
document.getElementById("email").innerHTML = params.get('email');
document.getElementById("message").innerHTML = params.get('message');