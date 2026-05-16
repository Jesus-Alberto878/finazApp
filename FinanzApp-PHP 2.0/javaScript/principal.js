//========================= BARRA DE NAVEGACIÓN ===============================

// VARIABLES

const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

// ABRIR Y CERRAR MENÚ

if(botonMenu && menuLateral){

    botonMenu.addEventListener("click", () => {

        menuLateral.classList.toggle("active");

    });

    // CERRAR AL HACER CLICK FUERA

    document.addEventListener("click", (e) => {

        if(
            !menuLateral.contains(e.target) &&
            !botonMenu.contains(e.target)
        ){

            menuLateral.classList.remove("active");

        }

    });

}
//============= index ================
const btnEmpezar = document.getElementById("btnEmpezar");

btnEmpezar.addEventListener("click", () => {

    window.location.href = "iniciarSesion.php";
});
//============= Pagina de inicio de seccion ===================
//======================== ELEMENTOS ========================//

const formulario = document.querySelector(".formularioDatos");

const email = document.getElementById("email");

const password = document.getElementById("password");

const terminos = document.querySelector(".terminosCondiciones");

const cerrarModal = document.getElementById("cerrarModal");

const aceptarTerminos = document.getElementById("aceptarTerminos");

//======================== VALIDAR LOGIN ========================//

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const correo = email.value.trim();

    const contrasena = password.value.trim();

    // CAMPOS VACÍOS
    if(correo === "" || contrasena === ""){

        alert("Todos los campos son obligatorios");

        return;

    }

    // VALIDAR CORREO
    if(
        !correo.includes("@") ||
        !correo.includes(".")
    ){

        alert("Ingresa un correo válido");

        return;

    }

    // MOSTRAR MODAL
    terminos.style.display = "flex";

});

//======================== CERRAR MODAL ========================//

cerrarModal.addEventListener("click", () => {

    terminos.style.display = "none";

});

//======================== ACEPTAR ========================//

aceptarTerminos.addEventListener("click", () => {

    window.location.href = "pagina2.php";

});