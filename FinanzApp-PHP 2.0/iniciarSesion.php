<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educacion Financiera | FinanzApp</title>

    <!-- Icono que aparece en la pestaña del navegador -->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!-- Hoja de estilos principal de la página de educación financiera -->
    <link rel="stylesheet" href="css/iniciarsesion.css">

    <!-- Fuente externa usada en el diseño -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <?php include 'header.php'; ?>

    <!-- Contenido principal con el formulario de inicio de sesión -->
    <main class="formularioLogin">

        <!-- Tarjeta que contiene los campos para iniciar sesión -->
        <section class="tarjetaLogin">

            <!-- Título del formulario -->
            <h2>
                Iniciar sesión
            </h2>

            <!-- Mensaje de bienvenida para el usuario -->
            <p>
                ¡Bienvenido de nuevo a FinanzApp!
            </p>

            <!-- Formulario donde el usuario escribe sus datos -->
            <form class="formularioDatos">

                <!-- Campo para ingresar el correo electrónico -->
                <label for="email">
                    Correo electrónico
                </label>

                <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>

                <!-- Campo para ingresar la contraseña -->
                <label for="password">
                    Contraseña
                </label>

                <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>

                <!-- Botón para enviar o validar el inicio de sesión -->
                <button type="submit" class="botonIngresar" id="btnLogin">
                    Iniciar sesión
                </button>

            </form>

        </section>
        <!--======================== TÉRMINOS Y CONDICIONES ========================-->

<section class="terminosCondiciones">

    <article class="contenedorTerminos">

        <button class="cerrarModal" id="cerrarModal">
            ×
        </button>

        <h2 class="tituloTerminos">
            Términos y Condiciones
        </h2>

        <p class="textoTerminos">
            Bienvenido a FinanzApp. Al utilizar esta plataforma aceptas
            los siguientes términos y condiciones de uso.
        </p>

        <section class="bloqueTerminos">

            <h3>
                1. Uso de la plataforma
            </h3>

            <p>
                FinanzApp ayuda a los usuarios a controlar
                y administrar sus finanzas personales.
            </p>

        </section>

        <section class="bloqueTerminos">

            <h3>
                2. Privacidad de los datos
            </h3>

            <p>
                La información proporcionada no será compartida
                con terceros sin autorización.
            </p>

        </section>

        <section class="bloqueTerminos">

            <h3>
                3. Responsabilidad del usuario
            </h3>

            <p>
                El usuario debe proteger su información
                y utilizar la plataforma correctamente.
            </p>

        </section>

        <button class="botonIngresar" id="aceptarTerminos">
            Aceptar términos y continuar
        </button>

    </article>

</section>

        <script src="javaScript/principal.js"></script>

    </main>
    
    <?php include 'footer.php'; ?>

</body>

</html>