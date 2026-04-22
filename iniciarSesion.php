<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/iniciarSesion.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------>
    <main class="contenedor-iniciarSesion"> <!--contenedor principal-->
        <article> <!--recuadro donde aplicaremos css-->
            <h2>Iniciar sesión</h2> <!--texto para que el cliente sepa en que pagina esta-->
            <input id="email" class="email" type="email" placeholder="Email"><br><br>
            <!--input que te pedira el correo en la que fue registrada la cuenta-->
            <input id="contraseña" class="contraseña" type="password" placeholder="Contraseña"><br><br>
            <!--input que te pedira la contraseña de la cuenta-->
            <button onclick="iniciarSesion()">Iniciar sesión</button>
            <!--boton que precionara el cliente para iniciar sesion al rellenar todos los campos-->
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

    <script src="js/iniciarSesion.js"></script>
</body>

</html>