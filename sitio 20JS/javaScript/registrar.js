const botonMenu = document.getElementById("menu");

const menuLateral = document.querySelector(".menuLateral");

const nombre = document.getElementById("nombre");

const email = document.getElementById("email");

const password = document.getElementById("password");

const btnRegistrar = document.getElementById("btnRegistrar");


// ===============================
// MENÚ HAMBURGUESA
// ===============================

botonMenu.innerHTML = `
<span></span>
<span></span>
<span></span>
`;


// ===============================
// DEBOUNCE
// ===============================

function debounce(funcion, tiempo) {

    let temporizador;

    return function () {

        clearTimeout(temporizador);

        temporizador = setTimeout(() => {

            funcion();

        }, tiempo);
    };
}


// ===============================
// VALIDAR INPUTS
// ===============================

function validarInput(input) {

    if (input.value.trim() !== "") {

        input.style.border = "2px solid #00c853";

        input.style.backgroundColor = "#e8f5e9";

        input.dataset.estado = "correcto";

    } else {

        input.style.border = "2px solid #d50000";

        input.style.backgroundColor = "#ffebee";

        input.dataset.estado = "incorrecto";
    }
}


// ===============================
// INPUT NOMBRE EN MAYÚSCULAS
// ===============================

nombre.addEventListener("input", debounce(() => {

    nombre.value = nombre.value.toUpperCase();

    validarInput(nombre);

}, 300));


// ===============================
// VALIDAR EMAIL
// ===============================

email.addEventListener("input", debounce(() => {

    validarInput(email);

}, 300));


// ===============================
// VALIDAR PASSWORD
// ===============================

password.addEventListener("input", debounce(() => {

    validarInput(password);

}, 300));


// ===============================
// ABRIR / CERRAR MENÚ
// ===============================

botonMenu.addEventListener("click", (e) => {

    e.stopPropagation();

    try {

        menuLateral.classList.toggle("active");


        // ===============================
        // data-* 
        // ===============================

        menuLateral.dataset.estado =
            menuLateral.classList.contains("active")
                ? "abierto"
                : "cerrado";


        // ===============================
        // textContent
        // ===============================

        if (menuLateral.dataset.estado === "abierto") {

            botonMenu.textContent = "✕";

        } else {

            botonMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            `;
        }


        // ===============================
        // Template literals
        // ===============================

        console.log(`Menú ${menuLateral.dataset.estado}`);

    } catch (error) {

        // ===============================
        // try/catch
        // ===============================

        console.error("Error en el menú");

        console.error(error);
    }
});


// ===============================
// EVITAR CIERRE DENTRO DEL MENÚ
// ===============================

menuLateral.addEventListener("click", (e) => {

    e.stopPropagation();
});


// ===============================
// CERRAR AL HACER CLICK FUERA
// ===============================

document.addEventListener("click", debounce(() => {

    menuLateral.classList.remove("active");

    menuLateral.dataset.estado = "cerrado";

    botonMenu.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    `;

}, 200));


// ===============================
// MENSAJE DE BIENVENIDA
// ===============================

const mensaje = document.createElement("p");


// ===============================
// textContent
// ===============================




// ===============================
// data-*
// ===============================

mensaje.dataset.tipo = "mensaje";


// ===============================
// DocumentFragment
// ===============================

const fragmentoMensaje = document.createDocumentFragment();

fragmentoMensaje.appendChild(mensaje);

document.body.appendChild(fragmentoMensaje);


// ===============================
// BOTÓN REGISTRAR
// ===============================

btnRegistrar.addEventListener("click", async (e) => {

    e.preventDefault();

    try {

        if (
            nombre.value.trim() === "" ||
            email.value.trim() === "" ||
            password.value.trim() === ""
        ) {

            alert("Completa todos los campos");

            return;
        }


        // ===============================
        // OBJETO USUARIO
        // ===============================

        const usuario = {

            nombre: nombre.value,

            email: email.value
        };


        // ===============================
        // LOCALSTORAGE
        // ===============================

        const usuarios =
            JSON.parse(localStorage.getItem("usuarios")) || [];


        usuarios.push(usuario);

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        // ===============================
        // ELIMINAR MENSAJE ANTERIOR
        // ===============================

        const mensajeAnterior =
            document.querySelector(".mensajeRegistro");

        if (mensajeAnterior) {

            mensajeAnterior.remove();
        }


        // ===============================
        // createElement
        // ===============================

        const tarjeta = document.createElement("article");

        const texto = document.createElement("p");


        tarjeta.classList.add("mensajeRegistro");


        // ===============================
        // textContent
        // ===============================

        texto.textContent =
            `Usuario ${usuario.nombre} registrado correctamente`;


        // ===============================
        // data-*
        // ===============================

        tarjeta.dataset.usuario = usuario.nombre;


        tarjeta.appendChild(texto);


        // ===============================
        // DocumentFragment
        // ===============================

        const fragmento = document.createDocumentFragment();

        fragmento.appendChild(tarjeta);

        document.body.appendChild(fragmento);


        // ===============================
        // Template literals
        // ===============================

        console.log(`Usuario ${usuario.nombre} agregado`);

        console.log(
            `Correo registrado: ${usuario.email}`
        );


        // ===============================
        // REDIRECCIÓN
        // ===============================

        setTimeout(() => {

            window.location.href = "./pagina2.html";

        }, 1000);

    } catch (error) {

        // ===============================
        // try/catch
        // ===============================

        console.error("Error al registrar");

        console.error(error);
    }
});