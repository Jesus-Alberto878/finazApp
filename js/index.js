
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

// Indica el inicio del bloque de codigo relacionado con la primera pagina.
//============================== pagina 1 ==============================

// Busca nuevamente el boton comenzar y le asigna otra accion de clic.
document.getElementById('btn-comenzar').addEventListener('click', ()=>{
    // Redirige al usuario hacia la pagina2.html.
    window.location.href = "pagina2.php"
})
