const inputNombre = document.getElementById("nombre");

    inputNombre.addEventListener("input", function() {
    this.value = this.value.toUpperCase();
    });
function enviarFormulario(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var problema = document.getElementById("problema").value;
    var mensaje = "";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(nombre === "" || email === "" || problema === ""){
        mensaje = "Por favor llena todos los campos";
    }else if (!regex.test(email)) {
        mensaje = "El correo electrónico no es válido";
    }else{
        mensaje = "Reporte enviado exitosamente";
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("problema").value = "";
    }
    document.getElementById("mensajeAviso").innerText = mensaje;
    document.getElementById("modalAviso").style.display = "flex";
}
function cerrarModal(){
    document.getElementById("modalAviso").style.display = "none";
}
//==================barra de navegacion==========================
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