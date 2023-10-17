document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("correo").value;
    const password = document.getElementById("Contraseña").value;

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const usuario = JSON.parse(storedUser);
        if (usuario.password === password) {
            localStorage.setItem("currentUser", usuario.nombre);
            window.location.href = "index.html";
        } else {
            alert("Contraseña incorrecta.");
        }
    } else {
        alert("Usuario no encontrado.");
    }
});