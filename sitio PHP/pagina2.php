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