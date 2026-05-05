//============================== barra de navegacion
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');

if (menu && sidebar) {
    menu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// Variable global
let ingresoGuardado = "";

// Función siguiente
function siguiente() {
    let ingreso = document.getElementById("ingreso").value;
    let mensaje = "";

    if (ingreso === "") {
        mensaje = "Por favor llena el campo";
        ingresoGuardado = "";
    } else {
        mensaje = "Ingreso exitoso";
        ingresoGuardado = ingreso;

        // Guardar en localStorage (opcional pero útil)
        localStorage.setItem("ingreso", ingreso);

        document.getElementById("ingreso").value = "";
    }

    document.getElementById("mensajeAviso").innerText = mensaje;
    document.getElementById("modalAviso").style.display = "flex";
}

// Función cerrar modal
function cerrarModal() {
    document.getElementById("modalAviso").style.display = "none";

    if (ingresoGuardado !== "") {
        window.location.href = "pagina3.php";
    }
}