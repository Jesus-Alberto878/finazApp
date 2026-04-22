const inputNombre = document.getElementById("nombre");

    inputNombre.addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });

    const inputApellidos = document.getElementById("apellidos");

    inputApellidos.addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });
function crear() {
    // Obtiene los valores de los campos de entrada del formulario.
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var mensaje = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida que los campos no estén vacíos.
    if (nombre === "" || apellidos === "" || email === "" || contraseña === "") {
        mensaje = "Por favor llena todos los campos";
    // Valida que el correo electrónico tenga un formato correcto.
    } else if (!regex.test(email)) {
        mensaje = "El correo electrónico no es válido";
    } else {
        mensaje = "Registro exitoso (ejemplo)";
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contraseña").value = "";   
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