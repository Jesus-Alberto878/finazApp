//selecciona el boton del menu para que se abra y se cierre
const botonMenu = document.getElementById("menu");
// selecciona el menu pa abrirlo y cerrarlo
const menuLateral = document.querySelector(".menuLateral");

// abrir/cerrar el menu con el botón
botonMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // pa que no se cierre solo el menu siuuu
    menuLateral.classList.toggle("active");
});

// evitar que al hacer click dentro del menú se cierre
menuLateral.addEventListener("click", (e) => {
    e.stopPropagation();
});

// cerrar al hacer click en cualquier lado donde no sea el menu
document.addEventListener("click", () => {
    menuLateral.classList.remove("active");
});

// agarra el boton que lleva a la siguiente pagina para que te lleve a la siguiente pagina
const botonEmpezar = document.getElementById("btnEmpezar");

botonEmpezar.addEventListener("click", (e) => {
    e.stopPropagation();// pa que no cierre el menu cuando haces click
    window.location.href = "pagina2.html"// manda a la pagina para que sigas ahorrando y te compres lo que mas deseas
})