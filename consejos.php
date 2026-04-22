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
    <?php
    declare(string_types=1);//Activa el tipado estricto en PHP (aunque aquí está mal escrito, debería ser strict_types)
    require_once 'header.php';//Incluye el archivo header.php (barra de navegación)
    ?> 
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