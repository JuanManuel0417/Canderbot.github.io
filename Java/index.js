const currentUser = localStorage.getItem("currentUser");
if (currentUser) {
    document.getElementById("mostrarNombre").textContent = currentUser;
}
