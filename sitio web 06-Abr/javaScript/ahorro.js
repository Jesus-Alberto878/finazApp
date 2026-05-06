// obtiene el elemento menu
const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

// abrir/cerrar con el botón
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que el click se propague al document
    menuLateral.classList.toggle("active");
});

// evitar que al hacer click dentro del menú se cierre
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// cerrar al hacer click fuera del menu (al hacer click en la pagina pues)
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});