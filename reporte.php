<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/reporte.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------>
    <main class="contenedor-reporte"> <!--contenedor principal-->
        <article> <!--recuadro al cual se le aplicara el css-->
            <h2>Reporte</h2>
            <input id="nombre" type="text" placeholder="Nombre" required> <br><br>
            <!--es un input donde nos pide el nombre para saber quien manda el reporte-->
            <input id="email" type="email" placeholder="Correo electrónico" required><br><br>
            <!--es un input donde nos pide el correo para que al momento de que manden el reporte tengamos su correo para poder cntactarnos con es-->
            <input id="problema" type="text" placeholder="Escribe el problema aquí" required><br><br>
            <!--aqui en este input el cliente debe describir o decir donde estuvo el problema-->
            <button onclick="enviarFormulario()">Enviar</button>
        </article>
    </main>
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
            <a href="redesSociales.php">Redes sociales</a>
            <!-- enlace a la sección de redes -->
        </nav>
    </footer>

    <script src="js/reporte.js"></script>
</body>

</html>