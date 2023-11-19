function mostrarFormulario() {
    document.getElementById('overlay').style.display = 'flex';
}

function cerrarFormulario() {
    document.getElementById('overlay').style.display = 'none';
}

function guardarReserva() {

    // Tu lógica para obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var documento = document.getElementById('documento').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;

    // Guarda la información en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('documento', documento);
    localStorage.setItem('tel', tel);
    localStorage.setItem('email', email);
    localStorage.setItem('date', date);
}
