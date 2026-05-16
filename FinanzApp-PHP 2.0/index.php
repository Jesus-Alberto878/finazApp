<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | FinanzApp</title>
    <!-- Icono que aparece en la pestaña del navegador -->
    <link rel="icon" href="imagenes/logo 2.webp">
    <!-- Hoja de estilos principal de la página de inicio -->
    <link rel="stylesheet" href="css/index.css">
    <!-- Fuente externa usada en el diseño -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body>
    <?php include 'header.php'; ?>


    <!--==================================================================================-->
    <h1 class="textoPrincipal">¡Bienvenido a FinanzApp!</h1>
    <main class="index">
        <section class="indexContenedor">
            <h2>Tu compañero confiable para gestionar tus finanzas personales de manera fácil y eficiente.</h2>
            <button id="btnEmpezar">Empezar Ahora</button>
        </section>
    </main>
    <main class="informacion">
        <article>
            <h3>Sobre nuestra plataforma</h3>
            <p>FinanzApp nació con una misión clara: hacer que el control del
                dinero sea algo simple y alcanzable para todos. A través de
                herramientas intuitivas, puedes registrar ingresos, visualizar
                en qué gastas y tomar decisiones más inteligentes cada día,
                sin importar si eres principiante o ya tienes experiencia.</p>
        </article>

        <article>
            <h3>Seguridad y confianza</h3>
            <p>Tu privacidad es nuestra responsabilidad. Aplicamos buenas
                prácticas de desarrollo para que cada movimiento que registres
                permanezca protegido. Puedes usar FinanzApp con la tranquilidad
                de que nadie más tendrá acceso a tus cifras.</p>
        </article>

        <article>
            <h3>Accesibilidad y facilidad de uso</h3>
            <p>Nuestro sitio web está diseñado para ser intuitivo y accesible desde diferentes dispositivos. Esto
                permite
                que los usuarios puedan consultar y administrar su información en cualquier momento y lugar.</p>
            <a href="pagina2.php">¿No sabes por donde empezar?, Empieza a ahorrar con nosotros ahora</a>
        </article>

        <article>
            <h3>Nuestro equipo</h3>
            <p>Somos estudiantes apasionados por las finanzas y queremos pasar el parcial de programación</p>
            <ul>
                <p>Armando Alvarez Ibarra - Principal programador y diseñador</p>
                <p>Jesús Alberto Cortés García - Lider de equipo y programador</p>
                <p>Alan Jesús Hernadez Chavez - Principal diseñador programador</p>
            </ul>
        </article>

    </main>
    
    <?php include 'footer.php'; ?>
    
    <!-- script -->
    <script src="javaScript/principal.js"></script>

</body>

</html>