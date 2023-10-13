<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["email1"];
    $problem = $_POST["problem"];
    $otherProblem = $_POST["problemTextArea"];

    $to = "sistemaadup@gmail.com";

    $subject = "Nuevo mensaje de contacto de $name";
    $messageBody = "Nombre: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Inconveniente: $problem\n";
    
    if ($problem == 0) {
        $messageBody .= "Otro: $otherProblem\n";
    }

    if (mail($to, $subject, $messageBody)) {
        echo "El formulario se ha enviado con éxito. ¡Gracias!";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.";
    }
}
?>
