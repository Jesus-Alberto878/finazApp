<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>

    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/pagina2.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

    <!-- Barra de navegación -->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>

    <h1 class="text-2">Registra tu ingreso</h1>

    <div class="linea">
        <div></div>
    </div>

    <main class="formulario-ingresos">
        <article>
            <input type="number" id="ingreso" class="ingreso" placeholder="Ingreso">
            <button onclick="siguiente()">Siguiente</button>
        </article>
    </main>

    <!-- Modal -->
    <div id="modalAviso" class="modal">
        <div class="modal-contenido">
            <p id="mensajeAviso"></p>
            <button onclick="cerrarModal()">Aceptar</button>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <nav>
            <a href="redesSociales.php">Redes sociales</a>
        </nav>
    </footer>

    <script src="js/pagina2.js"></script>
</body>

</html>