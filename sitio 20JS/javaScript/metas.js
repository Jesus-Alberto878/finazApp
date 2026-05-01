const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

/* =========================
   MENU LATERAL
========================= */

// abrir/cerrar menú
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    menuLateral.classList.toggle("active");
});

// evitar cierre al hacer click dentro
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// cerrar al hacer click fuera
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});

/* =========================
   VALIDACION EMAIL
========================= */

function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
}

/* =========================
   ESTILOS VALIDACION
========================= */

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

    const correo = email.value.trim();
    const contraseña = password.value.trim();

    let valido = true;

    // validar correo
    if (correo === "" || !validarEmail(correo)) {
        marcarInput(email, false);
        valido = false;
    } else {
        marcarInput(email, true);
    }

    // validar contraseña
    if (contraseña === "") {
        marcarInput(password, false);
        valido = false;
    } else {
        marcarInput(password, true);
    }

    if (!valido) return;

    btnLogin.textContent = "Ingresando...";
    btnLogin.style.opacity = "0.8";

    setTimeout(() => {
        localStorage.setItem("correoUsuario", correo);
        window.location.href = "pagina2.html";
    }, 1200);
});

/* =========================
   LIMPIAR ESTILOS AL ESCRIBIR
========================= */

[email, password].forEach((input) => {
    input.addEventListener("input", () => {
        input.style.border = "";
        input.style.boxShadow = "";
    });
});