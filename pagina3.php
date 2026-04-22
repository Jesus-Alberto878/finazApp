<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/pagina3.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------>
    <!-- ================= texto principal ================= -->
    <h1>Registrar Nuevo Gasto</h1>

    <!-- LINEA DECORATIVA -->
    <section class="linea">
        <div></div>
    </section>

    <!-- ================= formulario para agregar otro gasto ================= -->
    <article class="container-nuevo-gasto">
        <section class="nuevo-gasto">

            <h3>Registrar Nuevo Gasto</h3>

            <form id="formulario-gasto">

                <select id="categoria" required>
                    <option value="">Seleccionar tipo</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Comida">Comida</option>
                    <option value="Material">Material</option>
                    <option value="Inscripción">Inscripción</option>
                </select>

                <!-- INPUT -->
                <input type="number" id="precio" placeholder="Precio" required>

                <!-- BOTÓN -->
                <!-- type="button" evita recargar la página -->
                <button type="button" class="agregar" onclick="agregarGasto()">
                    Agregar Gasto
                </button>

            </form>
        </section>
    </article>

    <!-- ================= es el espacio donde vamos a ver la suma de todos los gastos ================= -->
    <article class="container-ingreso-total">
        <section class="ingreso-total">
            <strong>Ingreso Total: $0.00</strong>
        </section>
    </article>


    <!-- ================= tabla para ver los gastos registrados ================= -->
    <article class="container-registro-gastos">

        <h2>Gastos</h2>

        <section class="registro-gastos">
            <table class="table-container">

                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody id="lista-gastos"></tbody>

            </table>
        </section>
    </article>


    <!-- ================= donde va a ir la grafica ================= -->
    <article class="grafica-container">
        <canvas id="graficaPastel"></canvas>
    </article>

    <!-- se utilisa chart.js para lass graficas-->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Modal de aviso -->
    <div id="modalAviso" class="modal">
       <div class="modal-contenido">
         <h3>Aviso</h3>
           <p id="mensajeAviso"></p>
           <button onclick="cerrarModal()">Cerrar</button>
       </div>
    </div>
    <!------------------------------------footer-------------------------------------->
    <footer>
        <!-- pie de página -->
        <nav>
            <a href="html/redesSociales.php">Redes sociales</a>
            <!-- enlace a la sección de redes -->
        </nav>
    </footer>

    <script src="js/pagina3.js"></script>
</body>

</html>