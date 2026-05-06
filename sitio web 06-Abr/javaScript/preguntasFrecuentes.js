// selecciona el boton del menu para qu se abra y se cierre
const botonMenu = document.getElementById("menu");
// selecciona el menu pa abrirlo y cerrarlo
const menuLateral = document.querySelector(".menuLateral");

// abrir/cerrar con el boton del menu
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que el menu se cierre solo
    menuLateral.classList.toggle("active");//alterna entre el menu abierto y cerrado
});

// evitar que al hacer click dentro del menu se cierre
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// cerrar al hacer click en algun lugar donde no sea el menu
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});