<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/registrar.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------------------------------->
    <main class="contenedor-acceder"> <!--es el contenedor principal-->
        <article> <!--es el recuadro donde se le aplicara css-->
            <h2>Crear cuenta</h2> <!--un titulo para que el cliente sepa que esta creando una cuenta-->
            <input id="nombre" type="text" placeholder="Nombre"> <br><br>
            <!--input donde el cliente nos proporsinara su nombre-->
            <input id="apellidos" type="text" placeholder="Apellidos"><br><br>
            <!--input donde el cliente nos proporsinara su apellido-->
            <input id="email" type="email" placeholder="Email"><br><br>
            <!--input donde el cliente nos proporsinara su correo o email-->
            <input id="contraseña" type="password"
                placeholder="Contraseña"><br><br><!--input donde el cliente nos proporsinara la contraseña que le pondra a su cuenta-->
            <a href="iniciarSesion.php">¿Ya tienes cuenta?</a><br><br>
            <!--es un enlace donde nos llevara a la pagina de inicio de sesion para que el cliente inicie sesion-->
            <button onclick="crear()">Crear cuenta</button>
            <!--boton para crear la cuenta al rellenar todos los espacios-->
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

    <script src="js/registrar.js"></script>
</body>

</html>