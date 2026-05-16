<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Configuración básica del documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preguntas | FinanzApp</title>

    <!-- Icono que aparece en la pestaña del navegador -->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!-- Hoja de estilos principal de la página de preguntas frecuentes -->
    <link rel="stylesheet" href="css/preguntasFrecuentes.css">

    <!-- Fuente externa usada en el diseño -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <?php include 'header.php'; ?>
    <!-- Contenido principal de la página de preguntas frecuentes -->
    <main>

        <!-- Título principal de la página -->
        <h2 class="tituloPrincipal">Preguntas Frecuentes</h2>

        <!-- Pregunta 1: descripción general de FinanzApp -->
        <section class="faqItem">
            <h2>¿Qué es FinanzApp?</h2>

            <p>
                FinanzApp es una plataforma digital diseñada para ayudar a las personas
                a administrar sus finanzas personales de manera sencilla, rápida y segura.
                Nuestro objetivo es facilitar el control de ingresos, gastos, metas de ahorro
                y reportes financieros desde cualquier dispositivo.
            </p>
        </section>

        <!-- Pregunta 2: registro en la plataforma -->
        <section class="faqItem">
            <h2>¿Cómo puedo registrarme?</h2>

            <p>
                Puedes registrarte fácilmente desde la página de registro completando
                tus datos personales como nombre, correo electrónico y contraseña.
                Después de crear tu cuenta podrás acceder a todas las herramientas
                y funciones disponibles dentro de la plataforma.
            </p>
        </section>

        <!-- Pregunta 3: costo de uso de la plataforma -->
        <section class="faqItem">
            <h2>¿La plataforma es gratuita?</h2>

            <p>
                Sí, FinanzApp ofrece acceso gratuito a sus funciones principales
                para que cualquier usuario pueda comenzar a administrar su dinero
                sin necesidad de realizar pagos o suscripciones obligatorias.
            </p>
        </section>

        <!-- Pregunta 4: protección de datos -->
        <section class="faqItem">
            <h2>¿Mis datos están protegidos?</h2>

            <p>
                Sí, la seguridad de la información es una prioridad para nosotros.
                FinanzApp utiliza sistemas de protección y almacenamiento seguro
                para garantizar la privacidad y confidencialidad de los datos de cada usuario.
            </p>
        </section>

        <!-- Pregunta 5: creación de metas de ahorro -->
        <section class="faqItem">
            <h2>¿Puedo establecer metas de ahorro?</h2>

            <p>
                Claro. La plataforma permite crear metas financieras personalizadas
                para ayudarte a organizar tus ahorros y dar seguimiento al progreso
                de cada uno de tus objetivos económicos.
            </p>
        </section>

        <!-- Pregunta 6: compatibilidad con dispositivos móviles -->
        <section class="faqItem">
            <h2>¿FinanzApp funciona en celulares?</h2>

            <p>
                Sí, el sitio web está diseñado con un sistema responsive que permite
                utilizar la plataforma desde computadoras, tabletas y teléfonos móviles
                sin problemas de visualización.
            </p>
        </section>

    </main>
    <?php include 'footer.php'; ?>

    <!-- Archivo JavaScript que controla la interacción de la página -->
    <script src="javaScript/principal.js"></script>

</body>

</html>