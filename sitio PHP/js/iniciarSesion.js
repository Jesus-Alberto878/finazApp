function iniciarSesion() {
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    let mensaje = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //valide que los campos no esten vacios
    if (email === "" || contraseña === "") {
        mensaje = "Por favor llena todos los campos";

    //valide que el correo tenga un formato correcto
    } else if (!regex.test(email)) {
        mensaje = "El correo electrónico no es válido";

    } else {

        const emailGuardado = localStorage.getItem("email");
        const passGuardada = localStorage.getItem("password");

        if (email !== emailGuardado || contraseña !== passGuardada) {
            mensaje = "Correo o contraseña incorrectos";
        } else {
            mensaje = "Inicio de sesión exitoso";
        }
    }

    document.getElementById("mensajeAviso").innerText = mensaje;
    document.getElementById("modalAviso").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalAviso").style.display = "none";
}
// Indica el inicio del bloque de codigo relacionado con la barra de navegacion.
//============================== barra de navegacion
// Obtiene del HTML el elemento que funciona como boton del menu.
const menu = document.getElementById('menu');
// Obtiene del HTML el panel lateral que se mostrara u ocultara.
const sidebar = document.getElementById('sidebar');

// Agrega un evento de clic al boton del menu.
menu.addEventListener('click', () => {
    // Alterna la clase active en la barra lateral para mostrarla u ocultarla.
    sidebar.classList.toggle('active');
    // Alterna la clase active en el icono del menu para reflejar su estado visual.
    menu.classList.toggle('active');
});