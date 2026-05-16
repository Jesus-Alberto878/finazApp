<!DOCTYPE html>
<html lang="es">

<head>

    <!-- Configuración básica -->
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título -->
    <title>
        Registrar presupuesto | FinanzApp
    </title>

    <!-- Icono -->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!-- CSS -->
    <link rel="stylesheet" href="css/pagina2.css">

    <!-- Fuente -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body>
    <?php include 'header.php'; ?>

    <!--======================== MAIN ===========================-->

    <main class="pagina2">

        <!-- Título -->
        <h2 class="tituloPagina">
            Registrar ingreso
        </h2>

        <span class="linea"></span>

        <!-- Formulario -->
        <form>

            <label for="ingresoInicial">
                Monto del ingreso
            </label>

            <input type="number" id="ingresoInicial" name="ingresoInicial" placeholder="Monto del ingreso" min="1"
                required>

            <button id="btnSiguiente" type="submit">

                Siguiente

            </button>

        </form>

        <!-- Información -->
        <section class="informacion">
            <h2>¿Cómo funciona esta página?</h2>
            <p id="textoInformacion">
                Ingresa tu sueldo o ingreso mensual para comenzar.
                A partir de este dato, FinanzApp te ayudará a distribuir
                tu dinero, controlar tus gastos y establecer metas de ahorro
                alcanzables para ti.
            </p>

        </section>

    </main>

    <?php include 'footer.php'; ?>

    <!--======================== SCRIPT ===========================-->

    <script src="javaScript/principal.js"></script>

</body>

</html>