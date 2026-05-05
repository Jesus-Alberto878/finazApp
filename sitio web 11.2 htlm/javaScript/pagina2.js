/*======================== MENU ===========================*/

const botonMenu = document.getElementById("menu");
const menuLateral = document.querySelector(".menuLateral");

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

/*======================== DEBOUNCE ===========================*/

function debounce(funcion, tiempo) {

    let temporizador;

    return (...args) => {

        clearTimeout(temporizador);

        temporizador = setTimeout(() => {

            funcion(...args);

        }, tiempo);

    };

}

/*======================== VALIDACION ===========================*/

const inputIngreso = document.getElementById("ingresoInicial");

if (inputIngreso) {

    const validarIngreso = debounce(() => {

        if (
            inputIngreso.value <= 0 ||
            inputIngreso.value === ""
        ) {

            inputIngreso.style.border =
                "2px solid red";

        } else {

            inputIngreso.style.border =
                "2px solid green";

        }

    }, 300);

    inputIngreso.addEventListener(
        "input",
        validarIngreso
    );

}

/*======================== BOTON SIGUIENTE ===========================*/

const botonSiguiente =
    document.getElementById("btnSiguiente");

if (botonSiguiente) {

    botonSiguiente.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            const ingreso =
                event.target.form.ingresoInicial.value;

            if (
                ingreso === "" ||
                ingreso === "0"
            ) {

                alert("Llena todos los campos");

                return;

            }

            localStorage.setItem(
                "ingresoGuardado",
                ingreso
            );

            window.location.href =
                "pagina3.html";

        }
    );

}

/*======================== FETCH + ASYNC/AWAIT ===========================*/

const textoInformacion =
    document.getElementById("textoInformacion");

async function cargarInformacion() {

    if (!textoInformacion) return;

    try {

        const respuesta =
            await fetch(
                "javaScript/pagina2.json"
            );

        if (!respuesta.ok) {

            throw new Error(
                "No se pudo cargar la información"
            );

        }

        const datos = await respuesta.json();

        textoInformacion.textContent = `
${datos.parrafo1}

${datos.parrafo2}
`;

    } catch (error) {

        textoInformacion.textContent = `
Error al cargar la información.
Intenta nuevamente más tarde.
`;

        console.log(error);

    }

}

cargarInformacion();

/*======================== PAGINA 3 ===========================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const btnAgregar =
            document.getElementById("agregar");

        const categoria =
            document.getElementById("categoria");

        const montoInput =
            document.getElementById("montoGasto");

        const lista =
            document.getElementById("lista-gastos");

        const canvas =
            document.getElementById("graficaPastel");

        const dineroRestante =
            document.getElementById(
                "dineroRestante"
            );

        const totalGastadoTexto =
            document.getElementById(
                "totalGastado"
            );

        const mensajeVacio =
            document.getElementById(
                "mensajeVacio"
            );

        const barraProgreso =
            document.getElementById(
                "barraProgreso"
            );

        const mensajeUsuario =
            document.getElementById(
                "mensajeUsuario"
            );

        if (
            !btnAgregar ||
            !categoria ||
            !montoInput ||
            !lista ||
            !canvas
        ) {
            return;
        }

        const ctx =
            canvas.getContext("2d");

        let gastos =
            JSON.parse(
                localStorage.getItem("gastos")
            ) || [];

        let ingreso = Number(
            localStorage.getItem(
                "ingresoGuardado"
            )
        );

        if (!ingreso || ingreso <= 0) {

            alert(
                "Primero registra un ingreso"
            );

            window.location.href =
                "pagina2.html";

            return;

        }

        let grafica;

        mostrarGastos();
        actualizarGrafica();

        /*======================== AGREGAR ===========================*/

        btnAgregar.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                const cat =
                    categoria.value;

                const monto = Number(
                    montoInput.value
                );

                if (
                    cat === "" ||
                    monto <= 0 ||
                    isNaN(monto)
                ) {

                    mensajeUsuario.textContent = `
Completa todos los campos correctamente.
`;

                    return;

                }

                const totalActual =
                    gastos.reduce(
                        (acc, gasto) =>
                            acc + gasto.monto,
                        0
                    );

                if (
                    totalActual + monto >
                    ingreso
                ) {

                    mensajeUsuario.textContent = `
No puedes gastar más de tu ingreso.
`;

                    return;

                }

                gastos.push({
                    categoria: cat,
                    monto: monto
                });

                localStorage.setItem(
                    "gastos",
                    JSON.stringify(gastos)
                );

                categoria.value = "";
                montoInput.value = "";

                mensajeUsuario.textContent = `
Gasto agregado correctamente.
`;

                mostrarGastos();
                actualizarGrafica();

            }
        );

        /*======================== MOSTRAR ===========================*/

        function mostrarGastos() {

            lista.innerHTML = "";

            if (gastos.length === 0) {

                mensajeVacio.style.display =
                    "block";

            } else {

                mensajeVacio.style.display =
                    "none";

            }

            /*======================== DOCUMENT FRAGMENT ===========================*/

            const fragmento =
                document.createDocumentFragment();

            gastos.forEach(
                (gasto, index) => {

                    /*======================== CREATE ELEMENT ===========================*/

                    const fila =
                        document.createElement(
                            "tr"
                        );

                    const categoriaTd =
                        document.createElement(
                            "td"
                        );

                    categoriaTd.textContent =
                        gasto.categoria;

                    const montoTd =
                        document.createElement(
                            "td"
                        );

                    montoTd.textContent = `
$${gasto.monto}
`;

                    const accionTd =
                        document.createElement(
                            "td"
                        );

                    const botonEliminar =
                        document.createElement(
                            "button"
                        );

                    botonEliminar.textContent =
                        "X";

                    /*======================== DATA ATTRIBUTE ===========================*/

                    botonEliminar.dataset.index =
                        index;

                    botonEliminar.classList.add(
                        "eliminarBtn"
                    );

                    botonEliminar.addEventListener(
                        "click",
                        (e) => {

                            const indice =
                                e.target.dataset.index;

                            eliminarGasto(
                                indice
                            );

                        }
                    );

                    accionTd.appendChild(
                        botonEliminar
                    );

                    fila.appendChild(
                        categoriaTd
                    );

                    fila.appendChild(
                        montoTd
                    );

                    fila.appendChild(
                        accionTd
                    );

                    fragmento.appendChild(
                        fila
                    );

                }
            );

            lista.appendChild(fragmento);

        }

        /*======================== ELIMINAR ===========================*/

        function eliminarGasto(index) {

            gastos.splice(index, 1);

            localStorage.setItem(
                "gastos",
                JSON.stringify(gastos)
            );

            mostrarGastos();
            actualizarGrafica();

        }

        /*======================== GRAFICA ===========================*/

        function actualizarGrafica() {

            const categorias = {};

            let totalGastos = 0;

            gastos.forEach(gasto => {

                if (
                    !categorias[
                        gasto.categoria
                    ]
                ) {

                    categorias[
                        gasto.categoria
                    ] = 0;

                }

                categorias[
                    gasto.categoria
                ] += gasto.monto;

                totalGastos +=
                    gasto.monto;

            });

            const restante =
                ingreso - totalGastos;

            dineroRestante.textContent = `
Dinero restante: $${restante}
`;

            totalGastadoTexto.textContent = `
Total gastado: $${totalGastos}
`;

            barraProgreso.value =
                (totalGastos / ingreso) * 100;

            let labels =
                Object.keys(categorias);

            let data =
                Object.values(categorias);

            let colores = [
                "#3b82f6",
                "#f59e0b",
                "#8b5cf6",
                "#ef4444"
            ];

            if (restante >= 0) {

                labels.push(
                    "Restante"
                );

                data.push(restante);

                colores.push(
                    "#10b981"
                );

            }

            if (grafica) {

                grafica.destroy();

            }

            grafica = new Chart(ctx, {

                type: "pie",

                data: {

                    labels: labels,

                    datasets: [{

                        data: data,

                        backgroundColor:
                            colores.slice(
                                0,
                                data.length
                            )

                    }]

                },

                options: {

                    plugins: {

                        legend: {

                            position:
                                "bottom"

                        }

                    }

                }

            });

        }

    }
);