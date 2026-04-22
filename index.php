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
    <header>
        <div class="left">
            <div class="menu-container">
                <div class="menu" id="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="brand">
                <img src="imagenes/logo 2.webp" alt="logo de la empreza" class="logo">
                <span class="name">FinanzApp</span>
            </div>
        </div>
        <div class="right">
            <a href="iniciarSesion.php" class="icons-header"><img src="iconos/usuario.svg" alt="img-user"
                    class="user"></a>
        </div>
    </header>
    <div class="sidebar" id="sidebar">
        <div class="cerrar" id="cerrar">✕</div>
        <nav>
            <ul>
                <li><a href="registrar.php"><img src="iconos/registrar.svg"
                            alt="registrar"><span>registrarse</span></a></li>
                <li><a href="index.php" class="selected"><img src="iconos/casa.svg"
                            alt="contacto"><span>Inicio</span></a></li>
                <li><a href="contacto.php"><img src="iconos/contacto.svg" alt="contacto"><span>contacto</span></a>
                </li>
                <li><a href="reporte.php"><img src="iconos/reporte.svg" alt="reporte"><span>reporte</span></a>
                </li>
                <li><a href="nosotros.php"><img src="iconos/nosotros.svg" alt="nosotros"><span>nosotros</span></a>
                </li>
                <li><a href="consejos.php"><img src="iconos/preguntas.svg" alt="consejos"><span>consejos</span></a>
                </li>
            </ul>
        </nav>
    </div>
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