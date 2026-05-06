//selecciona el boton menu que abre y cierra el menu
const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

// abrir/cerrar con el botón
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // pa que no se cierre solo el menu
    menuLateral.classList.toggle("active");
});

// si le dan click dentro del menu, no se cierre
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// el menu se cierra al hacer click fuera del menu
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});