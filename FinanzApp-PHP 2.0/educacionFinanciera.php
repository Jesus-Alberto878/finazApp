<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Configuración básica del documento -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educacion Financiera | FinanzApp</title>

    <!-- Icono que aparece en la pestaña del navegador -->
    <link rel="icon" href="imagenes/logo 2.webp">

    <!-- Hoja de estilos principal de la página de educación financiera -->
    <link rel="stylesheet" href="css/educacionFinanciera.css">

    <!-- Fuente externa usada en el diseño -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <?php include 'header.php'; ?>

    <!-- Contenido principal de la página de educación financiera -->
    <main class="contenidoEducacion">

        <!-- Tarjeta informativa sobre el ahorro -->
        <article class="tarjetaEducacion">
            <h2>¿Qué es el ahorro?</h2>

            <p>Ahorrar sin un objetivo es difícil de sostener. Cuando sabes
                exactamente para qué estás guardando ese dinero, cada sacrificio
                tiene sentido y cada semana te acerca más a algo concreto.</p>
        </article>

        <!-- Tarjeta informativa sobre el presupuesto -->
        <article class="tarjetaEducacion">
            <h2>¿Qué es un presupuesto?</h2>

            <p>
                Un presupuesto es el mapa de tu dinero. Te muestra exactamente
                a dónde va cada peso y te permite decidir, con anticipación,
                cuánto quieres destinar a cada área de tu vida sin sorpresas
                desagradables al final del mes.</p>
        </article>

        <!-- Tarjeta informativa sobre las inversiones -->
        <article class="tarjetaEducacion">
            <h2>Importancia de invertir</h2>

            <p>
                Guardar dinero bajo el colchón lo mantiene estático. Invertirlo,
                en cambio, lo pone a trabajar. Con el tiempo, incluso cantidades
                modestas pueden crecer significativamente si se colocan en el
                lugar correcto.
            </p>
        </article>

        <!-- Tarjeta informativa sobre los ingresos -->
        <article class="tarjetaEducacion">
            <h2>¿Qué son los ingresos?</h2>

            <p>Son todo lo que entra: tu sueldo, un trabajo extra, la venta
                de algo que ya no usas o el rendimiento de una inversión.
                Conocer con exactitud cuánto recibes es el punto de partida
                de cualquier decisión económica bien tomada.
            </p>
        </article>

        <!-- Tarjeta informativa sobre los gastos -->
        <article class="tarjetaEducacion">
            <h2>¿Qué son los gastos?</h2>

            <p>
                Un gasto es cualquier salida de dinero, desde la renta hasta
                el café de cada mañana. Clasificarlos entre necesarios y
                prescindibles es el ejercicio más revelador que puedes hacer
                para entender tu situación real.
            </p>
        </article>

        <!-- Tarjeta con recomendaciones generales para mejorar las finanzas -->
        <article class="tarjetaEducacion">
            <h2>Consejos para mejorar tus finanzas</h2>

            <p>
                La clave no está en ganar más, sino en administrar mejor
                lo que ya tienes. Pequeños ajustes sostenidos en el tiempo,
                como revisar suscripciones, planear las compras del súper
                o evitar el crédito para gastos corrientes, generan resultados
                que se notan.
            </p>
        </article>

    </main>
    
    <?php include 'footer.php'; ?>

    <!-- Archivo JavaScript que controla la interacción de la página -->
    <script src="javaScript/principal.js"></script>

</body>

</html>