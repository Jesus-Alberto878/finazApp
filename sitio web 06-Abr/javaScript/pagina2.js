//======================== MENU ===========================//
// Esta parte sirve para controlar el menu lateral de la pagina.

// Sirve para buscar en el HTML el boton que abre o cierra el menu.
const botonMenu = document.getElementById("menu");

// Sirve para buscar en el HTML el menu lateral que se va a mostrar u ocultar.
const menuLateral = document.querySelector(".menuLateral");

// Sirve para ejecutar una accion cuando el usuario hace click en el boton del menu.
botonMenu.addEventListener("click", (e) => {
    // Sirve para que el click del boton no active tambien el click general del documento.
    e.stopPropagation();

    // Sirve para abrir el menu si esta cerrado, o cerrarlo si esta abierto.
    menuLateral.classList.toggle("active");
});

// Sirve para detectar clicks dentro del menu lateral.
menuLateral.addEventListener("click", (e) => {
    // Sirve para que al hacer click dentro del menu, el menu no se cierre automaticamente.
    e.stopPropagation();
});

// Sirve para detectar clicks en cualquier parte de la pagina.
document.addEventListener("click", () => {
    // Sirve para cerrar el menu cuando el usuario hace click fuera del menu.
    menuLateral.classList.remove("active");
});

/*======================== DEBOUNCE ===========================*/
// Esta parte sirve para evitar que una funcion se ejecute demasiadas veces seguidas.

// Sirve para crear una funcion que espera cierto tiempo antes de ejecutarse.
function debounce(funcion, tiempo) {
    // Sirve para guardar el temporizador activo.
    let temporizador;

    // Sirve para regresar una nueva funcion que recibe los datos originales.
    return (...args) => {
        // Sirve para cancelar el temporizador anterior si el usuario vuelve a escribir o hacer algo.
        clearTimeout(temporizador);

        // Sirve para iniciar un nuevo temporizador.
        temporizador = setTimeout(() => {
            // Sirve para ejecutar la funcion original despues de esperar el tiempo indicado.
            funcion(...args);
        }, tiempo);
    };
}

/*======================== VALIDACION ===========================*/
// Esta parte sirve para revisar si el ingreso inicial es valido.

// Sirve para buscar el input donde el usuario escribe su ingreso inicial.
const inputIngreso = document.getElementById("ingresoInicial");

// Sirve para evitar errores si este input no existe en la pagina actual.
if (inputIngreso) {
    // Sirve para validar el ingreso, pero esperando 300 milisegundos despues de que el usuario escriba.
    const validarIngreso = debounce(() => {
        // Sirve para revisar si el valor esta vacio o si es menor o igual a cero.
        if (
            inputIngreso.value <= 0 ||
            inputIngreso.value === ""
        ) {
            // Sirve para marcar visualmente que el ingreso esta mal.
            inputIngreso.style.border =
                "2px solid red";
        } else {
            // Sirve para marcar visualmente que el ingreso esta bien.
            inputIngreso.style.border =
                "2px solid green";
        }
    }, 300);

    // Sirve para ejecutar la validacion cada vez que el usuario escribe en el input.
    inputIngreso.addEventListener(
        "input",
        validarIngreso
    );
}

/*======================== BOTON SIGUIENTE ===========================*/
// Esta parte sirve para pasar de la pagina del ingreso a la pagina de gastos.

// Sirve para buscar el boton "Siguiente" en el HTML.
const botonSiguiente =
    document.getElementById("btnSiguiente");

// Sirve para evitar errores si el boton no existe en la pagina actual.
if (botonSiguiente) {
    // Sirve para ejecutar una accion cuando el usuario hace click en el boton.
    botonSiguiente.addEventListener(
        "click",
        (event) => {
            // Sirve para evitar que el formulario recargue la pagina.
            event.preventDefault();

            // Sirve para obtener el ingreso que escribio el usuario en el formulario.
            const ingreso =
                event.target.form.ingresoInicial.value;

            // Sirve para validar que el usuario haya escrito un ingreso.
            if (
                ingreso === "" ||
                ingreso === "0"
            ) {
                // Sirve para avisarle al usuario que falta llenar el campo.
                alert("Llena todos los campos");

                // Sirve para detener el codigo y no avanzar a la siguiente pagina.
                return;
            }

            // Sirve para guardar el ingreso en el navegador y poder usarlo en otra pagina.
            localStorage.setItem(
                "ingresoGuardado",
                ingreso
            );

            // Sirve para mandar al usuario a la pagina 3.
            window.location.href =
                "pagina3.html";
        }
    );
}

/*======================== FETCH + ASYNC/AWAIT ===========================*/
// Esta parte sirve para cargar texto desde un archivo JSON.

// Sirve para buscar el elemento donde se va a mostrar la informacion.
const textoInformacion =
    document.getElementById("textoInformacion");

// Sirve para crear una funcion que puede esperar la respuesta de fetch.
async function cargarInformacion() {

    // Sirve para detener la funcion si no existe el elemento donde se mostraria el texto.
    if (!textoInformacion) return;

    // Sirve para intentar cargar la informacion y controlar errores si algo sale mal.
    try {
        // Sirve para pedir el archivo pagina2.json.
        const respuesta =
            await fetch(
                "javaScript/pagina2.json"
            );

        // Sirve para revisar si la peticion fallo.
        if (!respuesta.ok) {
            // Sirve para crear un error cuando no se pudo cargar la informacion.
            throw new Error(
                "No se pudo cargar la información"
            );
        }

        // Sirve para convertir la respuesta del archivo JSON en datos que JavaScript pueda usar.
        const datos = await respuesta.json();

        // Sirve para mostrar los parrafos del JSON dentro del elemento de la pagina.
        textoInformacion.textContent = `
${datos.parrafo1}

${datos.parrafo2}
`;

    } catch (error) {
        // Sirve para mostrar un mensaje amable si no se pudo cargar la informacion.
        textoInformacion.textContent = `
Error al cargar la información.
Intenta nuevamente más tarde.
`;

        // Sirve para mostrar el error real en la consola y poder revisarlo como programador.
        console.log(error);
    }
}

// Sirve para ejecutar la carga de informacion cuando el archivo JavaScript se carga.
cargarInformacion();

/*======================== PAGINA 3 ===========================*/
// Esta parte sirve para manejar la pagina donde el usuario registra sus gastos.

// Sirve para esperar a que el HTML este listo antes de buscar elementos de la pagina.
document.addEventListener(
    "DOMContentLoaded",
    () => {
        // Sirve para buscar el boton que agrega un gasto.
        const btnAgregar =
            document.getElementById("agregar");

        // Sirve para buscar el campo donde se elige o escribe la categoria del gasto.
        const categoria =
            document.getElementById("categoria");

        // Sirve para buscar el campo donde se escribe el monto del gasto.
        const montoInput =
            document.getElementById("montoGasto");

        // Sirve para buscar el lugar donde se van a mostrar los gastos agregados.
        const lista =
            document.getElementById("lista-gastos");

        // Sirve para buscar el canvas donde Chart.js dibujara la grafica.
        const canvas =
            document.getElementById("graficaPastel");

        // Sirve para buscar el elemento donde se mostrara el dinero que queda.
        const dineroRestante =
            document.getElementById(
                "dineroRestante"
            );

        // Sirve para buscar el elemento donde se mostrara cuanto se ha gastado en total.
        const totalGastadoTexto =
            document.getElementById(
                "totalGastado"
            );

        // Sirve para buscar el mensaje que aparece cuando no hay gastos agregados.
        const mensajeVacio =
            document.getElementById(
                "mensajeVacio"
            );

        // Sirve para buscar la barra que muestra visualmente el porcentaje gastado.
        const barraProgreso =
            document.getElementById(
                "barraProgreso"
            );

        // Sirve para buscar el elemento donde se muestran avisos al usuario.
        const mensajeUsuario =
            document.getElementById(
                "mensajeUsuario"
            );

        // Sirve para confirmar que los elementos principales existen antes de usar la pagina.
        if (
            !btnAgregar ||
            !categoria ||
            !montoInput ||
            !lista ||
            !canvas
        ) {
            // Sirve para detener el codigo si esta no es la pagina correcta o falta algo importante.
            return;
        }

        // Sirve para obtener la herramienta de dibujo 2D del canvas.
        const ctx =
            canvas.getContext("2d");

        // Sirve para recuperar los gastos guardados; si no hay gastos, empieza con una lista vacia.
        let gastos =
            JSON.parse(
                localStorage.getItem("gastos")
            ) || [];

        // Sirve para recuperar el ingreso guardado y convertirlo a numero.
        let ingreso = Number(
            localStorage.getItem(
                "ingresoGuardado"
            )
        );

        // Sirve para validar que exista un ingreso antes de registrar gastos.
        if (!ingreso || ingreso <= 0) {

            // Sirve para avisar que primero se debe registrar un ingreso.
            alert(
                "Primero registra un ingreso"
            );

            // Sirve para regresar a la pagina donde se registra el ingreso.
            window.location.href =
                "pagina2.html";

            // Sirve para detener la ejecucion de esta pagina.
            return;
        }

        // Sirve para guardar la grafica actual y poder destruirla antes de crear una nueva.
        let grafica;

        // Sirve para mostrar en pantalla los gastos que ya estaban guardados.
        mostrarGastos();

        // Sirve para dibujar la grafica con los gastos guardados.
        actualizarGrafica();

        /*======================== AGREGAR ===========================*/
        // Esta parte sirve para agregar nuevos gastos a la lista.

        // Sirve para ejecutar el codigo cuando el usuario da click en agregar.
        btnAgregar.addEventListener(
            "click",
            (e) => {
                // Sirve para evitar que el formulario recargue la pagina.
                e.preventDefault();

                // Sirve para obtener la categoria del nuevo gasto.
                const cat =
                    categoria.value;

                // Sirve para obtener el monto del nuevo gasto convertido a numero.
                const monto = Number(
                    montoInput.value
                );

                // Sirve para revisar que la categoria y el monto sean validos.
                if (
                    cat === "" ||
                    monto <= 0 ||
                    isNaN(monto)
                ) {
                    // Sirve para decirle al usuario que los campos estan incompletos o incorrectos.
                    mensajeUsuario.textContent = `
Completa todos los campos correctamente.
`;

                    // Sirve para detener la funcion y no guardar datos incorrectos.
                    return;
                }

                // Sirve para sumar todos los gastos actuales.
                const totalActual =
                    gastos.reduce(
                        (acc, gasto) =>
                            acc + gasto.monto,
                        0
                    );

                // Sirve para comprobar si el gasto nuevo haria que se pase del ingreso.
                if (
                    totalActual + monto >
                    ingreso
                ) {
                    // Sirve para avisar que no puede gastar mas dinero del que ingreso.
                    mensajeUsuario.textContent = `
No puedes gastar más de tu ingreso.
`;

                    // Sirve para detener la funcion y no agregar ese gasto.
                    return;
                }

                // Sirve para agregar el nuevo gasto al arreglo.
                gastos.push({
                    categoria: cat,
                    monto: monto
                });

                // Sirve para guardar la lista actualizada de gastos en el navegador.
                localStorage.setItem(
                    "gastos",
                    JSON.stringify(gastos)
                );

                // Sirve para limpiar el campo de categoria despues de guardar.
                categoria.value = "";

                // Sirve para limpiar el campo de monto despues de guardar.
                montoInput.value = "";

                // Sirve para confirmar al usuario que el gasto se agrego bien.
                mensajeUsuario.textContent = `
Gasto agregado correctamente.
`;

                // Sirve para actualizar la tabla o lista de gastos en pantalla.
                mostrarGastos();

                // Sirve para actualizar la grafica con el gasto nuevo.
                actualizarGrafica();
            }
        );

        /*======================== MOSTRAR ===========================*/
        // Esta parte sirve para crear visualmente la lista de gastos.

        // Sirve para definir la funcion que dibuja los gastos en el HTML.
        function mostrarGastos() {
            // Sirve para borrar la lista antes de volver a dibujarla.
            lista.innerHTML = "";

            // Sirve para revisar si la lista de gastos esta vacia.
            if (gastos.length === 0) {
                // Sirve para mostrar el mensaje de que no hay gastos.
                mensajeVacio.style.display =
                    "block";
            } else {
                // Sirve para ocultar el mensaje cuando ya hay gastos.
                mensajeVacio.style.display =
                    "none";
            }

            /*======================== DOCUMENT FRAGMENT ===========================*/
            // Esta parte sirve para construir varios elementos antes de agregarlos a la pagina.

            // Sirve para crear un contenedor temporal que mejora el rendimiento al insertar filas.
            const fragmento =
                document.createDocumentFragment();

            // Sirve para recorrer cada gasto y crear una fila para cada uno.
            gastos.forEach(
                (gasto, index) => {
                    /*======================== CREATE ELEMENT ===========================*/
                    // Esta parte sirve para crear etiquetas HTML desde JavaScript.

                    // Sirve para crear una fila de tabla.
                    const fila =
                        document.createElement(
                            "tr"
                        );

                    // Sirve para crear una celda donde ira la categoria.
                    const categoriaTd =
                        document.createElement(
                            "td"
                        );

                    // Sirve para poner el texto de la categoria dentro de la celda.
                    categoriaTd.textContent =
                        gasto.categoria;

                    // Sirve para crear una celda donde ira el monto.
                    const montoTd =
                        document.createElement(
                            "td"
                        );

                    // Sirve para mostrar el monto con signo de pesos.
                    montoTd.textContent = `
$${gasto.monto}
`;

                    // Sirve para crear una celda donde ira el boton de eliminar.
                    const accionTd =
                        document.createElement(
                            "td"
                        );

                    // Sirve para crear el boton que eliminara el gasto.
                    const botonEliminar =
                        document.createElement(
                            "button"
                        );

                    // Sirve para poner una X dentro del boton.
                    botonEliminar.textContent =
                        "X";

                    /*======================== DATA ATTRIBUTE ===========================*/
                    // Esta parte sirve para guardar informacion extra dentro de un elemento HTML.

                    // Sirve para guardar la posicion del gasto dentro del boton.
                    botonEliminar.dataset.index =
                        index;

                    // Sirve para agregar una clase CSS al boton y poder darle estilo.
                    botonEliminar.classList.add(
                        "eliminarBtn"
                    );

                    // Sirve para eliminar el gasto cuando se hace click en el boton.
                    botonEliminar.addEventListener(
                        "click",
                        (e) => {
                            // Sirve para obtener la posicion del gasto desde el boton.
                            const indice =
                                e.target.dataset.index;

                            // Sirve para mandar ese indice a la funcion que elimina gastos.
                            eliminarGasto(
                                indice
                            );
                        }
                    );

                    // Sirve para meter el boton dentro de su celda.
                    accionTd.appendChild(
                        botonEliminar
                    );

                    // Sirve para meter la celda de categoria dentro de la fila.
                    fila.appendChild(
                        categoriaTd
                    );

                    // Sirve para meter la celda de monto dentro de la fila.
                    fila.appendChild(
                        montoTd
                    );

                    // Sirve para meter la celda de accion dentro de la fila.
                    fila.appendChild(
                        accionTd
                    );

                    // Sirve para guardar la fila en el fragmento temporal.
                    fragmento.appendChild(
                        fila
                    );
                }
            );

            // Sirve para agregar todas las filas creadas a la pagina de una sola vez.
            lista.appendChild(fragmento);
        }

        /*======================== ELIMINAR ===========================*/
        // Esta parte sirve para quitar gastos de la lista.

        // Sirve para crear una funcion que elimina un gasto segun su posicion.
        function eliminarGasto(index) {
            // Sirve para quitar un elemento del arreglo gastos.
            gastos.splice(index, 1);

            // Sirve para guardar en localStorage la lista ya actualizada.
            localStorage.setItem(
                "gastos",
                JSON.stringify(gastos)
            );

            // Sirve para actualizar lo que se ve en la lista despues de eliminar.
            mostrarGastos();

            // Sirve para actualizar la grafica despues de eliminar.
            actualizarGrafica();
        }

        /*======================== GRAFICA ===========================*/
        // Esta parte sirve para calcular los datos y pintar la grafica de gastos.

        // Sirve para crear una funcion que recalcula y redibuja la grafica.
        function actualizarGrafica() {
            // Sirve para guardar el total gastado por cada categoria.
            const categorias = {};

            // Sirve para guardar la suma total de todos los gastos.
            let totalGastos = 0;

            // Sirve para revisar gasto por gasto y acumular sus montos.
            gastos.forEach(gasto => {
                // Sirve para saber si esa categoria todavia no existe en el objeto.
                if (
                    !categorias[
                    gasto.categoria
                    ]
                ) {
                    // Sirve para crear esa categoria empezando en cero.
                    categorias[
                        gasto.categoria
                    ] = 0;
                }

                // Sirve para sumar el monto del gasto a su categoria.
                categorias[
                    gasto.categoria
                ] += gasto.monto;

                // Sirve para sumar el monto al total gastado.
                totalGastos +=
                    gasto.monto;
            });

            // Sirve para calcular cuanto dinero queda despues de los gastos.
            const restante =
                ingreso - totalGastos;

            // Sirve para mostrar el dinero restante en la pagina.
            dineroRestante.textContent = `
Dinero restante: $${restante}
`;

            // Sirve para mostrar cuanto se ha gastado en total.
            totalGastadoTexto.textContent = `
Total gastado: $${totalGastos}
`;

            // Sirve para llenar la barra de progreso segun el porcentaje gastado.
            barraProgreso.value =
                (totalGastos / ingreso) * 100;

            // Sirve para convertir los nombres de las categorias en etiquetas para la grafica.
            let labels =
                Object.keys(categorias);

            // Sirve para convertir los totales de cada categoria en valores para la grafica.
            let data =
                Object.values(categorias);

            // Sirve para definir los colores que tendra cada parte de la grafica.
            let colores = [
                "#3b82f6",
                "#f59e0b",
                "#8b5cf6",
                "#ef4444"
            ];

            // Sirve para agregar el dinero restante a la grafica si no es negativo.
            if (restante >= 0) {
                // Sirve para agregar el nombre "Restante" a las etiquetas.
                labels.push(
                    "Restante"
                );

                // Sirve para agregar el valor restante a los datos.
                data.push(restante);

                // Sirve para agregar el color verde para la parte restante.
                colores.push(
                    "#10b981"
                );
            }

            // Sirve para revisar si ya existe una grafica dibujada.
            if (grafica) {
                // Sirve para borrar la grafica anterior antes de crear otra.
                grafica.destroy();

            }

            // Sirve para crear una nueva grafica con Chart.js.
            grafica = new Chart(ctx, {
                // Sirve para indicar que la grafica sera de pastel.
                type: "pie",

                // Sirve para mandar a Chart.js las etiquetas, datos y colores.
                data: {
                    // Sirve para poner los nombres que apareceran en la grafica.
                    labels: labels,

                    // Sirve para configurar la serie de datos que se dibujara.
                    datasets: [{
                        // Sirve para poner los numeros que determinan el tamaño de cada parte del pastel.
                        data: data,

                        // Sirve para poner un color a cada parte del pastel.
                        backgroundColor:
                            colores.slice(
                                0,
                                data.length
                            )
                    }]
                },

                // Sirve para configurar detalles visuales de la grafica.
                options: {
                    // Sirve para configurar plugins incluidos en Chart.js.
                    plugins: {
                        // Sirve para configurar la leyenda de la grafica.
                        legend: {
                            // Sirve para colocar la leyenda abajo de la grafica.
                            position:
                                "bottom"
                        }
                    }
                }
            });
        }
    }
);
