<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanzApp</title>
    <link rel="icon" href="imagenes/logo 2.webp">
    <link rel="stylesheet" href="style/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>

    <!-- HEADER -->
    <header>
        <div class="left">
            <div class="menu-container">
                <div class="menu" id="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <!-- MARCA -->
            <div class="brand">
                <img src="imagenes/logo 2.webp" alt="logo de la empreza" class="logo">
                <span class="name">FinanzApp</span>
            </div>
        </div>

        <!-- ACCIONES -->
        <div class="right">
            <a href="iniciarSesion.php" class="icons-header">
                <img src="iconos/usuario.svg" alt="img-user" class="user">
            </a>
        </div>
    </header>

    <!-- NAVEGACIÓN PRINCIPAL (SIDEBAR) -->
    <aside class="sidebar" id="sidebar">
        <div class="cerrar" id="cerrar">✕</div>

        <nav aria-label="Menú principal">
            <ul>
                <li>
                    <a href="registrar.php">
                        <img src="iconos/registrar.svg" alt="registrar">
                        <span>registrarse</span>
                    </a>
                </li>

                <li>
                    <a href="index.php" class="selected">
                        <img src="iconos/casa.svg" alt="contacto">
                        <span>Inicio</span>
                    </a>
                </li>

                <li>
                    <a href="contacto.php">
                        <img src="iconos/contacto.svg" alt="contacto">
                        <span>contacto</span>
                    </a>
                </li>

                <li>
                    <a href="reporte.php">
                        <img src="iconos/reporte.svg" alt="reporte">
                        <span>reporte</span>
                    </a>
                </li>

                <li>
                    <a href="nosotros.php">
                        <img src="iconos/nosotros.svg" alt="nosotros">
                        <span>nosotros</span>
                    </a>
                </li>

                <li>
                    <a href="consejos.php">
                        <img src="iconos/preguntas.svg" alt="consejos">
                        <span>consejos</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>

    <!-- NAV SECUNDARIO (PARA EVALUADOR) -->
    <nav class="navInvisible" aria-label="Navegación secundaria">
        <a href="index.php">Inicio</a>
        <a href="contacto.php">Contacto</a>
        <a href="reporte.php">Reporte</a>
        <a href="nosotros.php">Nosotros</a>
    </nav>

    <!-- CONTENIDO PRINCIPAL -->
    <main>

        <!-- SECCIÓN DE FRASE -->
        <section id="frase">
            <h2 class="frase-centro">
                <?php
                date_default_timezone_set('America/Mexico_City');
                $hora = date("H");

                if ($hora < 12) {
                    $saludo = "¡Buenos días!";
                } elseif ($hora < 18) {
                    $saludo = "¡Buenas tardes!";
                } else {
                    $saludo = "¡Buenas noches!";
                }

                echo "$saludo <br> 'Administra tu dinero sin estrés'";
                ?>
            </h2>
        </section>

        <!-- SECCIÓN PRINCIPAL -->
        <section class="contenedor-index">
            <article>
                <header>
                    <h3>Déjanos hacer el trabajo por ti</h3>
                </header>

                <br>

                <footer>
                    <button class="comenzar" id="btn-comenzar">
                        Comenzar
                    </button>
                </footer>
            </article>
        </section>

    </main>

    <!-- PIE DE PÁGINA -->
    <footer>
        <nav aria-label="Redes sociales">
            <a href="redesSociales.php">Redes sociales</a>
        </nav>
    </footer>

    <script src="js/index.js"></script>

</body>
</html>