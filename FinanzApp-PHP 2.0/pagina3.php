<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Configuración básica del documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título de la página -->
    <title>Registro de gastos | FinanzApp</title>

    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="css/pagina3.css">

    <!-- Fuente -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body>
    <?php include 'header.php'; ?>
    <!--======================== Formulario ===========================-->
    <main>

        <form class="formularioGastos">

            <h2 class="tituloFormulario">
                Agregar Gasto
            </h2>

            <!-- Categoría -->
            <select id="categoria" name="categoria" required>

                <option value="">
                    Selecciona el tipo
                </option>

                <option value="transporte">
                    Transporte
                </option>

                <option value="comida">
                    Comida
                </option>

                <option value="materiales">
                    Materiales
                </option>

                <option value="inscripcion">
                    Inscripción
                </option>

            </select>

            <!-- Monto -->
            <input id="montoGasto" name="montoGasto" type="number" min="1" placeholder="Monto del gasto" required>

            <!-- Botón -->
            <button id="agregar" type="button">
                Agregar
            </button>

            <!-- Mensaje dinámico -->
            <p id="mensajeUsuario"></p>

        </form>

        <!--======================== Registro ===========================-->
        <article class="contenedorRegistroGastos">

            <h2>Gastos</h2>

            <!-- Dinero restante -->
            <p id="dineroRestante">
                Dinero restante: $0
            </p>

            <!-- Total gastado -->
            <p id="totalGastado">
                Total gastado: $0
            </p>

            <!-- Barra -->
            <progress id="barraProgreso" value="0" max="100"></progress>

            <!-- Mensaje vacío -->
            <p id="mensajeVacio">
                No hay gastos registrados.
            </p>

            <!-- Tabla -->
            <section class="registroGastos">

                <table class="tablaGastos">

                    <thead>

                        <tr>

                            <th>
                                Categoría
                            </th>

                            <th>
                                Precio
                            </th>

                            <th>
                                Acción
                            </th>

                        </tr>

                    </thead>

                    <tbody id="lista-gastos"></tbody>

                </table>

            </section>

        </article>

        <!--======================== Gráfica ===========================-->
        <article class="contenedorGrafica">

            <canvas id="graficaPastel"></canvas>

        </article>

    </main>

    </section>

    <?php include 'footer.php'; ?>

    <!--======================== Scripts ===========================-->

    <!-- Librería Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- JavaScript -->
    <script src="javaScript/principal.js"></script>

</body>

</html>