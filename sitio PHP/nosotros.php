<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <!-- Icono de la pestaña -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/nosotros.css">
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
    <main class="contenedor-nosotros"> <!--contenedor principal-->
        <article> <!--es el recuadro donde aplicaremos el css-->
            <h1>Acerca de nosotros</h1> <!--es un titulo para que el cliente sepa en que pagina esta-->
            <!--primer parrafo que cuenta sobre nosotros-->
            <h3>Mi equipo está desarrollando una página web para administrar el dinero de las personas. Actualmente
                trabajamos con HTML y CSS para crear la estructura y el diseño. Más adelante implementaremos JavaScript
                para agregar funciones e interactividad. Este proyecto nos ayuda a mejorar nuestras habilidades y a
                trabajar en equipo.</h3>
        </article>
    </main>
    <section class="integrantes">
        <div>
            <h3>Armando Alvarez Ibarra</h3>
            <p>Es un estudiante enfocado en el desarrollo web, con interés en crear soluciones prácticas como páginas
                para la administración del dinero. Destaca por su creatividad y por aportar ideas al diseño del
                proyecto.</p>
            <h3>Jesús Alberto Cortés García</h3>
            <p>Se caracteriza por su responsabilidad y compromiso en el trabajo en equipo. Participa activamente en la
                construcción de la página web y en la organización del proyecto.</p>
            <h3>Alan Jesús Hernández Chávez</h3>
            <p>Es un integrante dedicado que aporta apoyo en el desarrollo y mejora de la página. Se enfoca en aprender
                nuevas herramientas para fortalecer el proyecto.</p>
            <h3>Jasmyn Vega</h3>
            Destaca por su colaboración y participación en el equipo. Apoya en el diseño y en la estructura del
            proyecto, buscando que sea claro y funcional.
        </div>
    </section>
    <!------------------------------------footer-------------------------------------->
    <footer>
        <!-- pie de página -->
        <nav>
            <a href="redesSociales.php">Redes sociales</a>
            <!-- enlace a la sección de redes -->
        </nav>
    </footer>

    <script src="js/nosotros.js"></script>
</body>

</html>