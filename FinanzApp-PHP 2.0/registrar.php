<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar | FinanzApp</title>
    <!-- Icono que aparece en la pestaña del navegador -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <!-- Hoja de estilos principal de la página de inicio -->
    <link rel="stylesheet" href="css/registrar.css">
    <!-- Fuente externa usada en el diseño -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <?php include 'header.php'; ?>
    <!----------------------------------------------->
    <main class="registrarse">
        <section class="registrarseContenedor">
            <h3>Registrarse</h3>
            <p>¡Únete a FinanzApp y comienza a gestionar tus finanzas de manera inteligente!</p>
            <form>
                <!-- Campo para ingresar el nombre del usuario -->
                <label>Nombre:</label>
                <input type="text" id="nombre" required>

                <!-- Campo para ingresar el correo electrónico -->
                <label>Email:</label>
                <input type="email" id="email" required>

                <!-- Campo para ingresar la contraseña -->
                <label>Contraseña:</label>
                <input type="password" id="password" required>
            </form>
            <button id="btnRegistrar">registrarse</button>
        </section>
    </main>
    <?php include 'footer.php'; ?>
    <!------- Script --------->
    <script src="javaScript/principal.js"></script>
</body>

</html>