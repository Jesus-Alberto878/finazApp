// selecciona el boton del menu para que se cierre y se abra en corto
const botonMenu = document.getElementById("menu");
// selecciona el menu para abrirlo
const menuLateral = document.querySelector(".menuLateral");

// agarra los textos de los inputs para manipularlos mas adelante
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

/* =========================
   MENU LATERAL
========================= */

// pa que se abra y se cierre en corto el menu
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();// para que no se ciere solo el menu
    menuLateral.classList.toggle("active");// le pone o le quita la clase active para que se abra o se cierre
});

// evitar cierre al hacer click dentro del mennu
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// cerrar en corto al hacer click fuera del menu
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});

/* =========================
   VALIDACION EMAIL
========================= */

// revisa que lo que escribieron en el campo sea un email de verdad
function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
}

/* =========================
   ESTILOS VALIDACION
========================= */

// pone borde verde o rojo segun si el input es valido o nel
function marcarInput(input, esValido) {
    if (esValido) {
        input.style.border = "2px solid #2ecc71";
        input.style.boxShadow = "0 0 8px rgba(46, 204, 113, 0.3)";
    } else {
        input.style.border = "2px solid #e74c3c";
        input.style.boxShadow = "0 0 8px rgba(231, 76, 60, 0.3)";
    }
}

/* =========================
   LOGIN
========================= */

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    // quita los esapcios de lo que escribieron en el input de email y contraseña
    const correo = email.value.trim();
    const contraseña = password.value.trim();

    // se necesitara depues para verificar si tood esta bien
    let valido = true;

    // para validar correo
    if (correo === "" || !validarEmail(correo)) {
        marcarInput(email, false);
        valido = false;
    } else {
        marcarInput(email, true);
    }

    // para validar contraseña
    if (contraseña === "") {
        marcarInput(password, false);
        valido = false;
    } else {
        marcarInput(password, true);
    }

    if (!valido) return;// esta es la parte de la verificacon que si es true o es false

    //animacion super perrona
    btnLogin.textContent = "Ingresando...";// cambia el texto que se ve en el boton del login para efectoso del la animacion
    btnLogin.style.opacity = "0.8";// le pone un poco tranparene para que la animacion 

    //espera 1.2s antes de que te lance a la pagina2.hmtl
    setTimeout(() => {
        localStorage.setItem("correoUsuario", correo);
        window.location.href = "pagina2.html";
    }, 1200);
});

/* =========================
   LIMPIAR ESTILOS AL ESCRIBIR
========================= */

//limpia los inputs para que quede precioso
[email, password].forEach((input) => {
    input.addEventListener("input", () => {
        input.style.border = "";
        input.style.boxShadow = "";
    });
});