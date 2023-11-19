// Lee la información del localStorage
var nombre = localStorage.getItem('nombre');
var documento = localStorage.getItem('documento');
var tel = localStorage.getItem('tel');
var email = localStorage.getItem('email');
var date = localStorage.getItem('date');

// Muestra la información en la página
document.getElementById('nombreReserva').textContent = nombre;
document.getElementById('documentoReserva').textContent = documento;
document.getElementById('telReserva').textContent = tel;
document.getElementById('emailReserva').textContent = email;
document.getElementById('dateReserva').textContent = date;
