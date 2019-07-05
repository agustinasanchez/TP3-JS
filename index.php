<?php

    require "code-login.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="style/style.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>

    <div class="container-all">

        <div class="ctn-form">
            <img src="image/banner.jpg" alt="" class="logo">
            <h1 class="title">Iniciar Sesión</h1>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                <label for="">Email</label>
                <input type="text" name="email">
                <span class="msg-error"></span>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"></span>

                <input type="submit" value="Iniciar">

            </form>

            <span class="text-footer">¿Aún no te has registrado?
                <a href="register.php">Registrate</a>
            </span>
        </div>

        <div class="ctn-text">
            <div class="capa"></div>
            <h1 class="title-description">Programación</h1>
            <p class="text-description">Comienza con P y termina con tu vida social, amorosa, y entras en el mundo del estrés,IRA y la depresión</p>
        </div>

    </div>

</body>

</html>