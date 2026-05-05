// ================== OBTENER INGRESO ==================
//parseFloat convierte el string a numero decimal, si no hay nada se asigna 0 
//localStorage.getItem("ingresoGuardado") obtiene el valor del ingreso almacenado en el localStorage, si no existe devuelve null, por eso se usa || 0 para asignar 0 en ese caso
const ingresoInicial = parseFloat(localStorage.getItem("ingreso")) || 0;
// ================== VARIABLES ==================
// totalGastado lleva la suma de todos los gastos registrados   
// gastosPorCategoria es un objeto que almacena el total gastado en cada categoría para facilitar la actualización de la gráfica    
let totalGastado = 0;
let gastosPorCategoria = {
    Transporte: 0,
    Comida: 0,
    Material: 0,
    Inscripción: 0
};
// grafica es la instancia de Chart.js que se actualizará cada vez que se agregue o elimine un gasto
let grafica;

// ================== MODAL ==================
//mostrarModal(mensaje) es una función que muestra un modal con un mensaje específico, se utiliza para mostrar avisos al usuario como errores o confirmaciones
//mensaje es el texto que se mostrará dentro del modal
function mostrarModal(mensaje) {
    document.getElementById("mensajeAviso").innerText = mensaje;
    document.getElementById("modalAviso").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalAviso").style.display = "none";
}

// cerrar al hacer clic fuera
// window.onclick es un evento global que se dispara cada vez que el usuario hace clic en cualquier parte de la ventana del navegador
// e es el objeto del evento que contiene información sobre el clic, como el elemento objetivo (e.target)
// se obtiene el modal por su id y se verifica si el elemento clicado es el modal, si es así se llama a cerrarModal() para ocultarlo
window.onclick = function(e) {
    let modal = document.getElementById("modalAviso");
    if (e.target === modal) {
        cerrarModal();
    }
}

// ================== RESUMEN ==================
function actualizarResumen() {
    // restante es la cantidad de dinero que queda después de restar el total gastado al ingreso inicial
    const restante = ingresoInicial - totalGastado;
    // se actualiza el texto del resumen en la página para mostrar el ingreso restante y el total gastado, se formatea a dos decimales para mayor claridad
    document.querySelector(".ingreso-total strong").textContent =
        "Restante: $" + restante.toFixed(2) +
        " | Gastado: $" + totalGastado.toFixed(2);
}

// ================== AGREGAR GASTO ==================
function agregarGasto() {

    // Validacion para asegurarse de que el usuario haya ingresado un saldo inicial antes de agregar gastos, si ingresoInicial es menor o igual a 0, se muestra un modal indicando que primero deben ingresar un saldo inicial y se detiene la función con return para evitar que se agregue el gasto
    if (ingresoInicial <= 0) {
        //mostrarModal es una función que muestra un modal con un mensaje específico, en este caso se le indica al usuario que primero debe ingresar un saldo inicial antes de poder agregar gastos
        mostrarModal("Primero debes ingresar un saldo inicial");
        return;
    }
    
    // se obtienen los valores de categoría y precio ingresados por el usuario, categoria es el valor del campo de texto con id "categoria" y precio es el valor numérico del campo de texto con id "precio", se utiliza parseFloat para convertir el valor a un número decimal
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);

    // Validación para asegurarse de que se haya ingresado una categoría y un precio válido, se verifica si categoria está vacío o si precio no es un número o es menor o igual a 0, en cualquiera de estos casos se muestra un modal indicando que se debe ingresar una categoría y un precio válido, y se detiene la función con return para evitar que se agregue el gasto
    if (categoria === "" || isNaN(precio) || precio <= 0) {
        mostrarModal("Por favor ingresa una categoría y un precio válido");
        return;
    }

    // Validación para asegurarse de que el nuevo gasto no exceda el ingreso inicial, se verifica si la suma del total gastado más el nuevo precio es mayor que el ingreso inicial, si es así se muestra un modal indicando que no se puede gastar más del ingreso inicial y se detiene la función con return para evitar que se agregue el gasto
    if (totalGastado + precio > ingresoInicial) {
        mostrarModal("No puedes gastar más de tu ingreso inicial");
        return;
    }

    // sumar gasto
    // se actualizan las variables totalGastado y gastosPorCategoria para reflejar el nuevo gasto, totalGastado se incrementa en el precio del nuevo gasto, y gastosPorCategoria se actualiza sumando el precio a la categoría correspondiente
    totalGastado += precio;
    gastosPorCategoria[categoria] += precio;

    // actualizar resumen y gráfica
    // se llama a las funciones actualizarResumen() y actualizarGrafica() para reflejar los cambios en el resumen de gastos y la gráfica
    actualizarResumen();
    actualizarGrafica();

    // agregar a tabla
    //createElement("tr") crea un nuevo elemento de fila de tabla (tr) que se utilizará para mostrar el nuevo gasto en la lista de gastos, luego se establece el contenido HTML de la fila utilizando innerHTML para mostrar la categoría, el precio formateado a dos decimales y un botón para eliminar el gasto, finalmente se agrega la nueva fila a la tabla con id "lista-gastos" utilizando appendChild
    let fila = document.createElement("tr");

    //fila.innerHTML es una propiedad que permite establecer el contenido HTML de la fila creada, en este caso se utiliza una plantilla de cadena (template string) para insertar dinámicamente la categoría y el precio del gasto, además de incluir un botón que llama a la función eliminarGasto() pasando como argumentos el botón mismo, la categoría y el precio para permitir eliminar ese gasto específico cuando se haga clic en el botón
    fila.innerHTML = `
        <td>${categoria}</td>
        <td>$${precio.toFixed(2)}</td>
        <td>
            <button onclick="eliminarGasto(this, '${categoria}', ${precio})">
                Eliminar
            </button>
        </td>
    `;

    // se agrega la nueva fila a la tabla con id "lista-gastos" utilizando appendChild, esto hace que el nuevo gasto aparezca en la lista de gastos en la página
    //appendChild es un método que se utiliza para agregar un nuevo nodo (en este caso, la fila creada) al final de la lista de hijos de un elemento padre (en este caso, la tabla con id "lista-gastos"), esto hace que el nuevo gasto aparezca en la lista de gastos en la página
    document.getElementById("lista-gastos").appendChild(fila);

    // limpiar inputs
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
}

// ================== ELIMINAR GASTO ==================
function eliminarGasto(boton, categoria, precio) {
    totalGastado -= precio;
    gastosPorCategoria[categoria] -= precio;

    actualizarResumen();
    actualizarGrafica();

    boton.parentElement.parentElement.remove();
}

// ================== GRÁFICA ==================
function actualizarGrafica() {
   
    // restante es la cantidad de dinero que queda después de restar el total gastado al ingreso inicial, se calcula para mostrarlo en la gráfica de pastel y reflejar cuánto dinero queda disponible después de los gastos registrados
    const restante = ingresoInicial - totalGastado;

    // se obtiene el contexto del canvas con id "graficaPastel" para poder dibujar la gráfica utilizando Chart.js, getContext("2d") devuelve un contexto de renderizado en 2D que se utiliza para dibujar gráficos en el canvas
    let ctx = document.getElementById("graficaPastel").getContext("2d");

    // si ya existe una gráfica creada, se destruye antes de crear una nueva para evitar superposiciones o errores al actualizar la gráfica con nuevos datos, esto asegura que cada vez que se actualice la gráfica se muestre correctamente con los datos actuales sin problemas de renderizado
    if (grafica) {
        grafica.destroy();
    }

    // se crea una nueva instancia de Chart utilizando el contexto obtenido, se especifica el tipo de gráfica como "pie" para crear una gráfica de pastel, se proporcionan los datos para las etiquetas y los valores de cada categoría, así como los colores de fondo para cada sección de la gráfica, finalmente se establecen opciones para hacer la gráfica responsiva y adaptarse a diferentes tamaños de pantalla
    grafica = new Chart(ctx, {
        //type: "pie" indica que se desea crear una gráfica de pastel, este tipo de gráfica es útil para mostrar la proporción de cada categoría en relación al total, en este caso se utiliza para mostrar cómo se distribuyen los gastos en las diferentes categorías (Transporte, Comida, Material, Inscripción) y cuánto dinero queda disponible (Restante) después de registrar los gastos
        type: "pie",
        data: {
            // labels es un arreglo que contiene las etiquetas para cada sección de la gráfica de pastel, en este caso se incluyen "Restante" para el dinero que queda después de los gastos, y las categorías
            labels: [
                "Restante",
                "Transporte",
                "Comida",
                "Material",
                "Inscripción"
            ],
            datasets: [{
                data: [
                    // data es un arreglo que contiene los valores numéricos para cada sección de la gráfica de pastel, en este caso se incluye el valor de restante para mostrar cuánto dinero queda disponible después de los gastos, seguido de los totales gastados en cada categoría (Transporte, Comida, Material, Inscripción) que se obtienen del objeto gastosPorCategoria
                    restante,
                    gastosPorCategoria.Transporte,
                    gastosPorCategoria.Comida,
                    gastosPorCategoria.Material,
                    gastosPorCategoria.Inscripción
                ],
                // backgroundColor es un arreglo que define los colores de fondo para cada sección de la gráfica de pastel, cada color corresponde a una etiqueta en el mismo orden, esto ayuda a diferenciar visualmente cada categoría y el restante en la gráfica, haciendo que sea más fácil para el usuario identificar cuánto dinero queda disponible y cómo se distribuyen los gastos entre las categorías
                backgroundColor: [
                    "#10b981",
                    "#3b82f6",
                    "#f59e0b",
                    "#8b5cf6",
                    "#ef4444"
                ]
            }]
        },
        // options es un objeto que contiene configuraciones adicionales para la gráfica, en este caso se establece responsive: true para hacer que la gráfica se adapte automáticamente al tamaño de la pantalla o contenedor donde se muestra, esto garantiza que la gráfica se vea bien en diferentes dispositivos y tamaños de ventana sin perder legibilidad o funcionalidad
        options: {
            //responsive: true hace que la gráfica se adapte automáticamente al tamaño de la pantalla o contenedor donde se muestra, esto es especialmente importante para garantizar que la gráfica se vea bien en diferentes dispositivos (como computadoras, tabletas y teléfonos móviles) y tamaños de ventana sin perder legibilidad o funcionalidad, al ser responsiva, la gráfica ajustará su tamaño y disposición para ofrecer una experiencia de usuario óptima en cualquier contexto de visualización
            responsive: true
        }
    });
}

// ================== INICIAL ==================
// se agrega un evento que se ejecuta cuando el contenido del documento ha sido completamente cargado, esto asegura que las funciones actualizarResumen() y actualizarGrafica() se llamen solo después de que todos los elementos del DOM estén disponibles, evitando errores relacionados con elementos no encontrados o no cargados al intentar actualizar el resumen y la gráfica al cargar la página
//addEventListener("DOMContentLoaded", () => { ... }) es un evento que se dispara cuando el documento HTML ha sido completamente cargado y parseado, lo que significa que todos los elementos del DOM están disponibles para ser manipulados, dentro de este evento se llaman a las funciones actualizarResumen() y actualizarGrafica() para inicializar el resumen de gastos y
document.addEventListener("DOMContentLoaded", () => {
    actualizarResumen();
    actualizarGrafica();
});

// ================== NAVBAR ==================
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');

if (menu && sidebar) {
    menu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menu.classList.toggle('active');
    });
}