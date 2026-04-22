<!--Indica que el documento es HTML5-->
<!DOCTYPE html>
 <!--Define el inicio del documento y el idioma (español)-->
<html lang="es">

<head> <!--Inicio de la cabecera-->
    <meta charset="UTF-8"> <!-- Permite usar caracteres especiales como acentos -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--Hace que la página sea responsive-->
    <title>FinanzApp</title> <!--Título que aparece en la pestaña del navegador-->

    <!--Icono de la pestaña-->
    <link rel="icon" href="imagenes/logo 2.webp"> <!--Define el favicon (icono del sitio)-->
    <link rel="stylesheet" href="style/consejos.css"> <!--Enlace al archivo de estilos CSS-->
    <!--Importa la fuente "Inter" desde Google Fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head> <!--Fin de la cabecera-->

<body>  <!--Inicio del cuerpo de la página-->
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
    <main class="container-consejos"> <!--Contenedor principal de la página-->
        <article> <!--Sección donde está el formulario-->
            <h2>Registra todos tus gastos</h2>
            <h4>Aunque parezcan pequeños, los gastos diarios, como comida o transporte, pueden sumar mucho al final.
            </h4>
            <h2>Revisa tu gráfica constantemente</h2>
            <h4>La gráfica te ayuda a identificar en qué estás gastando más y dónde puedes ahorrar.</h4>
            <h2>Establece un límite de gasto</h2>
            <h4>Antes de gastar, define cuánto puedes usar en cada categoría para no quedarte sin dinero.</h4>
            <h2>Ahorra una parte de tu dinero</h2>
            <h4>Intenta guardar al menos un pequeño porcentaje de tu ingreso.</h4>
            <h2>Evita gastos impulsivos</h2>
            <h4>No compres en el momento. Espera un poco y decide con calma.</h4>
            <h2>Lleva control diario</h2>
            <h4>Registrar tus gastos todos los días evita que olvides en qué gastaste.</h4>



        </article>
    </main>
    <!------------------------------------footer-------------------------------------->
    <footer>
        <!--pie de página-->
        <nav>
            <a href="redesSociales.php">Redes sociales</a>
            <!--enlace a la sección de redes-->
        </nav>
    </footer>

    <script src="js/consejos.js"></script>
</body> <!--Fin del cuerpo-->

</html> <!--Fin del documento-->