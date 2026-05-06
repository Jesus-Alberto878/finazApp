const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const problema = document.getElementById("problema");
const btnEnviar = document.getElementById("btnEnviar");

/* =========================
   MENU LATERAL
========================= */

botonMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    menuLateral.classList.toggle("active");
});

menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});

/* =========================
   VALIDACIONES
========================= */

function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
}

function marcar(input, estado) {
    if (estado) {
        input.style.border = "2px solid #2ecc71";
        input.style.boxShadow = "0 0 8px rgba(46, 204, 113, 0.3)";
    } else {
        input.style.border = "2px solid #e74c3c";
        input.style.boxShadow = "0 0 8px rgba(231, 76, 60, 0.3)";
    }
}

/* =========================
   ENVIAR REPORTE
========================= */

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombreVal = nombre.value.trim();
    const emailVal = email.value.trim();
    const problemaVal = problema.value.trim();

    let valido = true;

    // validar nombre
    if (nombreVal === "") {
        marcar(nombre, false);
        valido = false;
    } else {
        marcar(nombre, true);
    }

    // validar email
    if (emailVal === "" || !validarEmail(emailVal)) {
        marcar(email, false);
        valido = false;
    } else {
        marcar(email, true);
    }

    // validar problema
    if (problemaVal === "") {
        marcar(problema, false);
        valido = false;
    } else {
        marcar(problema, true);
    }

    if (!valido) return;

    /* =========================
       SIMULACION ENVIO
    ========================= */

    btnEnviar.textContent = "Enviando...";
    btnEnviar.style.opacity = "0.7";

    setTimeout(() => {
        btnEnviar.textContent = "Enviado ✔";
        btnEnviar.style.background = "#2ecc71";

        // limpiar formulario
        nombre.value = "";
        email.value = "";
        problema.value = "";

        setTimeout(() => {
            btnEnviar.textContent = "Enviar";
            btnEnviar.style.opacity = "1";
            btnEnviar.style.background = "";
        }, 2000);

    }, 1200);
});

/* =========================
   LIMPIAR ESTILOS AL ESCRIBIR
========================= */

[nombre, email, problema].forEach((input) => {
    input.addEventListener("input", () => {
        input.style.border = "";
        input.style.boxShadow = "";
    });
});