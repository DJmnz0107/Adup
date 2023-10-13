<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "sistemaadup@gmail.com"; 
    $subject = "Nuevo mensaje de contacto de $name";
    $messageBody = "Nombre: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Mensaje:\n$message\n";

    if (mail($to, $subject, $messageBody)) {
        echo "El formulario se ha enviado con éxito. ¡Gracias!";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.";
    }
}
?>