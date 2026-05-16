<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/header.css">
</head>
<body>
    <!-- Encabezado principal con menú, logo y acceso de usuario -->
    <header class="barraSuperior">
        <!-- Botón para abrir o cerrar el menú lateral -->
        <button class="botonMenu" id="menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <!-- Logo y nombre de la aplicación, enlazando al inicio -->
        <a href="/" class="marcaLogo">
            <img src="imagenes/logo 2.webp" alt="Logo oficial de FinanzApp" class="imagenLogo">
            <span class="texto">FinanzApp</span>
        </a>
        <!-- Icono de usuario que dirige al inicio de sesión -->
        <nav class="navegacionUsuario">
            <a href="iniciarSesion.php">
                <img src="iconos/usuario.svg" alt="Icono de usuario" class="iconoUsuario">
            </a>
        </nav>
    </header>

    <aside class="menuLateral">
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <img src="iconos/casa.svg" alt="icono para ir al inicio">
                        <span>Inicio</span>
                    </a>
                </li>

                <li>
                    <a href="iniciarSesion.php">
                        <img src="iconos/usuario.svg" alt="icono para iniciar sesión">
                        <span>Iniciar sesión</span>
                    </a>
                </li>

                <li>
                    <a href="registrar.php">
                        <img src="iconos/registrar.svg" alt="icono para ir al formulario para registrarse">
                        <span>registrarse</span>
                    </a>
                </li>

                <!-- Enlace a la página de ahorro -->
                <li>
                    <a href="ahorro.php">
                        <img src="iconos/ahorro.svg" alt="Icono de ahorro">
                        <span>Ahorro</span>
                    </a>
                </li>

                <!-- Enlace a la sección de educación financiera -->
                <li>
                    <a href="educacionFinanciera.php">
                        <img src="iconos/educacionFinanciera.svg" alt="Icono de educación financiera">
                        <span>Educacion Financiera</span>
                    </a>
                </li>

                <!-- Enlace a la página de metas financieras -->
                <li>
                    <a href="metas.php">
                        <img src="iconos/metas.svg" alt="Icono de metas">
                        <span>Metas</span>
                    </a>
                </li>

                <!-- Enlace a preguntas frecuentes -->
                <li>
                    <a href="preguntasFrecuentes.php">
                        <img src="iconos/preguntasFrecuentes.svg" alt="Icono de preguntas frecuentes">
                        <span>Preguntas Frecuentes</span>
                    </a>
                </li>

                <!-- Enlace a la página de servicios -->
                <li>
                    <a href="servicios.php">
                        <img src="iconos/servicios.svg" alt="Icono de servicios">
                        <span>Servicios</span>
                    </a>
                </li>

            </ul>
        </nav>
    </aside>

</body>
</html>