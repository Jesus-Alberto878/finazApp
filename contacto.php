<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/contacto.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------>
    <main class="contenedor-contacto">
        <!-- contenedor principal del contenido -->
        <article>
            <br>
            <!-- espacio visual antes del contenido -->
            <!-- es el recuadro que le aplicaremos css -->
            <h2>Opciones de contacto</h2>
            <!-- título principal de la sección -->
            <h2>Opción 1</h2>
            <!-- indica la primera forma de contacto -->
            <h3>armandoalvarez24@cbtis52.edu.mx</h3>
            <!-- correo institucional -->
            <h2>Opción 2</h2>
            <!-- segunda opción de contacto -->
            <h3>alanjesushernandez24@cbtis52.edu.mx</h3>
            <!-- correo institucional -->
            <h2>Opción 3</h2>
            <!-- tercera opción de contacto -->
            <h3>jesusalbertocortes24@cbtis52.edu.mx</h3>
            <!-- correo institucional -->
            <h4>¡Envíanos un correo, estaremos al pendiente!</h4>
            <!-- mensaje final para invitar a contactar -->
        </article>
    </main>
    <!------------------------------------footer-------------------------------------->
    <footer>
        <!-- pie de página -->
        <nav>
            <a href="redesSociales.php">Redes sociales</a>
            <!-- enlace a la sección de redes -->
        </nav>
    </footer>

    <script src="js/contacto.js"></script>
</body>

</html>