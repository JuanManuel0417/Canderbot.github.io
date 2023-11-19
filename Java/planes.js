function mostrarFormulario() {
    document.getElementById('overlay').style.display = 'flex';
}

function cerrarFormulario() {
    document.getElementById('overlay').style.display = 'none';
}

function comprar() {
    alert('Compra exitosa');
    cerrarFormulario(); 
}