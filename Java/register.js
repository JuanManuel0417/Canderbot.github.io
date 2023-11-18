document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

     // Obtiene los valores del nombre, apellido, correo, contraseña y genero
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const genero = document.querySelector('input[name="Genero"]:checked').value;


      // Crea un objeto de usuario con la informacion ingresada
    const usuario = {
        nombre,
        apellido,
        email,
        password,
        genero,
    };

      // Almacena en el localStorage, muestra alerta de registro exitoso y redirige al login 
    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
    
    window.location.href = "login.html";
});