<!DOCTYPE html>
<html lang="es">

<head>
    <!--Configuración básica del documento-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ahorro | FinanzApp</title>

    <!--Icono que aparece en la pestaña del navegador-->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!--Hoja de estilos principal de la página de ahorro-->
    <link rel="stylesheet" href="css/ahorro.css">

    <!--Fuente externa usada en el diseño-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <?php include 'header.php'; ?>

    <!--Título principal de la página-->
    <h2 class="tituloAhorro">Ahorro</h2>

    <!--Contenido principal con tarjetas informativas sobre ahorro-->
    <main class="contenidoAhorro">

        <!--Tarjeta 1: evitar gastos innecesarios-->
        <section class="tarjetaAhorro">
            <h2>Evita gastos innecesarios</h2>

            <p>Cada peso que sale sin propósito es un peso que no trabaja
                para ti. Revisar tus hábitos de consumo es el primer paso
                para recuperar el control de tu bolsillo.</p>

            <h3>Recomendaciones</h3>

            <ul>
                <li>Comparar precios antes de comprar.</li>
                <li>Evitar compras impulsivas.</li>
                <li>Priorizar necesidades sobre deseos.</li>
                <li>Reducir gastos innecesarios.</li>
            </ul>
        </section>

        <!--Tarjeta 2: importancia de crear un presupuesto-->
        <section class="tarjetaAhorro">
            <h2>Crea un presupuesto</h2>

            <p>
                Un presupuesto no es una restricción, es un permiso organizado
                para gastar. Saber exactamente cuánto entra y cuánto sale
                te quita la angustia de fin de mes.
            </p>

            <h3>Beneficios</h3>

            <ul>
                <li>Mayor control del dinero.</li>
                <li>Mejor organización financiera.</li>
                <li>Reducción de deudas.</li>
                <li>Facilidad para alcanzar metas.</li>
            </ul>
        </section>

        <!--Tarjeta 3: hábito de ahorrar constantemente-->
        <section class="tarjetaAhorro">
            <h2>Guarda dinero constantemente</h2>

            <p>
                No se trata de guardar lo que sobra, sino de apartar primero
                y gastar después. Ese pequeño cambio de hábito marca
                una diferencia enorme con el tiempo.
            </p>

            <h3>Consejos</h3>

            <ul>
                <li>Ahorrar una cantidad mensual fija.</li>
                <li>Crear metas de ahorro.</li>
                <li>Evitar retirar dinero innecesariamente.</li>
                <li>Mantener disciplina financiera.</li>
            </ul>
        </section>

        <!--Tarjeta 4: uso de metas financieras-->
        <section class="tarjetaAhorro">
            <h2>Utiliza metas financieras</h2>

            <p>
                Ahorrar sin un objetivo es difícil de sostener. Cuando sabes
                exactamente para qué estás guardando ese dinero, cada sacrificio
                tiene sentido y cada semana te acerca más a algo concreto.
                <a href="metas.php">¿No sabes por cuales metas empezar?,Ten tus primeras metas aqui</a>
            </p>

            <h3>Objetivos comunes</h3>

            <ul>
                <li>Comprar una computadora.</li>
                <li>Ahorrar para estudios.</li>
                <li>Planear un viaje.</li>
                <li>Crear un fondo de emergencia.</li>
            </ul>
        </section>

    </main>
    
    <?php include 'footer.php'; ?>

    <!--Archivo JavaScript que controla la interacción de la página-->
    <script src="javaScript/principal.js"></script>

</body>

</html>