<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

    <!--------------------------- Barra de navegacion ----------------------------->
    <?php
    declare(string_types=1);
    require_once 'header.php';
    ?>
    <!------------------------------------------------------------------------------>
    <section id="frase">
    <h2 class="frase-centro">
        <?php
        // Establecer la zona horaria
        date_default_timezone_set('America/Mexico_City');
        // Obtener la hora actual
        $hora = date("H");

        // Determinar el saludo según la hora
        //"$saludo" es una variable que se utiliza para almacenar el mensaje de saludo que se mostrará al usuario.
        if ($hora < 12) {
            $saludo = "¡Buenos días!";
        } elseif ($hora < 18) {
            $saludo = "¡Buenas tardes!";
        } else {
            $saludo = "¡Buenas noches!";
        }

        // Mostrar el saludo
        echo "$saludo <br> 'Administra tu dinero sin estrés'";
        ?>
    </h2>
</section>
    <main class="contenedor-index">
        <!-- contenido principal de la página -->
        <article> <!--recuadro para aplicar css-->
            <h3>Déjanos hacer el trabajo por ti</h3>
            <!-- frase llamativa para el usuario -->
            <br> <!-- espacio visual -->
            <button class="comenzar" id="btn-comenzar">Comenzar</button>
            <!-- botón/enlace principal que lleva a la siguiente página -->
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

    <script src="js/index.js"></script>
</body>

</html>