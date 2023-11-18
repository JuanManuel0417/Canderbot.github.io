// Obtiene el valor almacenado en el localStorage
const currentUser = localStorage.getItem("currentUser");

// Verificar si hay un valor almacenado en "currentUser"
if (currentUser) {

    // Si hay un valor, actualizar el contenido del elemento con id "mostrarNombre"
    document.getElementById("mostrarNombre").textContent = currentUser;
}
