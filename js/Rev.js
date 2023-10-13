const formulario = document.getElementById('formularioContacto');
const enviarBtn = document.getElementById('enviar1Btn');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('name');
    const nombreValor = nombreInput.value;
    const mensaje = document.getElementById('mensaje');
    const mensajeValor = mensaje.value;
    const correo = document.getElementById('email');
    const correoValor = correo.value;

    Swal.fire({
        icon: 'success',
        title: '¡Formulario Enviado!',
        text: `Gracias por tus comentarios ${nombreValor}, tu mensaje ha sido enviado correctamente.`,
    });

    formulario.reset();
})

