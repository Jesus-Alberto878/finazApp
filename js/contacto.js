// Indica el inicio del bloque de codigo relacionado con la barra de navegacion.
//============================== barra de navegacion
// Obtiene del HTML el elemento que funciona como boton del menu.
const menu = document.getElementById('menu');
// Obtiene del HTML el panel lateral que se mostrara u ocultara.
const sidebar = document.getElementById('sidebar');

// Agrega un evento de clic al boton del menu.
menu.addEventListener('click', () => {
    // Alterna la clase active en la barra lateral para mostrarla u ocultarla.
    sidebar.classList.toggle('active');
    // Alterna la clase active en el icono del menu para reflejar su estado visual.
    menu.classList.toggle('active');
});
