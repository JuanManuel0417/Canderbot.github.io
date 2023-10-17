document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const genero = document.querySelector('input[name="Genero"]:checked').value;

    const usuario = {
        nombre,
        apellido,
        email,
        password,
        genero,
    };

    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
});