const formulario2 = document.getElementById("Form");

formulario2.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("Name").value;
    const problems = document.getElementById("problem").value;
    const email = document.getElementById("email1").value;
    const textareaValue = document.getElementById('problemTextArea').value.trim();

    if (problems === "0" && textareaValue === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error en el formulario',
            text: 'Por favor, selecciona un problema o escribe algo en el campo de texto antes de enviar el formulario.',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Formulario Enviado!',
            text: `Gracias por reportar los problemas, ${name}. Tu mensaje ha sido enviado correctamente.`,
        });

        formulario2.reset();
    }
});
