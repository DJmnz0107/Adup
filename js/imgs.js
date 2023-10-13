const descargarBtn = document.getElementById('descargarBtn');

descargarBtn.addEventListener('click', function() {
Swal.fire({
    icon: 'question',
    title: 'Confirmar descarga',
    text: '¿Estás seguro de descargar el sistema ADUP?',
    showCancelButton: true,
    confirmButtonText: 'Sí, Descargar',
    cancelButtonText: 'Cancelar',
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire('La descarga del Sistema comenzo exitosamente!', '', 'success');
    }
});
});

const descManual = document.getElementById('DescargarManual')

descManual.addEventListener('click', function() {
    Swal.fire({
        icon: 'question',
        title: 'Confirmar descarga',
        text: 'estas por descargar el manual informativo del sistema ADUP',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire('Comenzo tu descarga', '', 'success');
        }
    });
    });