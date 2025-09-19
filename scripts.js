
document.addEventListener('DOMContentLoaded', function() {
  const boton = document.getElementById('miBoton');
  const textoOculto = document.getElementById('textoOculto');

  boton.addEventListener('click', function() {
    // Si el texto está oculto (display: none), lo mostramos.
    if (textoOculto.style.display === 'none') {
      textoOculto.style.display = 'inline'; // O 'block', dependiendo de tu diseño
      boton.textContent = 'Leer menos'; // Cambia el texto del botón
    } else {
      // Si el texto está visible, lo volvemos a ocultar.
      textoOculto.style.display = 'none';
      boton.textContent = 'Leer más'; // Cambia el texto del botón de nuevo
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

    const modalContainer = document.getElementById('modal-container');
    const confirmButton = document.getElementById('modal-confirm');
    const cancelButton = document.getElementById('modal-cancel');
    let currentLink = '';

    // Maneja los clics en los enlaces externos
    document.querySelectorAll('.enlace-externo').forEach(link => {
        link.addEventListener('click', (e) => {
            // Evita que el navegador navegue de inmediato
            e.preventDefault(); 
            
            // Guarda la URL del enlace para usarla después
            currentLink = link.href;
            
            // Muestra la ventana modal
            modalContainer.classList.add('show-modal');
        });
    });

    // Maneja el clic en el botón "Sí, continuar"
    confirmButton.addEventListener('click', () => {
        // Redirige al usuario a la URL guardada
        if (currentLink) {
            window.location.href = currentLink;
        }
        // Oculta la ventana modal
        modalContainer.classList.remove('show-modal');
    });

    // Maneja el clic en el botón "Cancelar"
    cancelButton.addEventListener('click', () => {
        // Oculta la ventana modal
        modalContainer.classList.remove('show-modal');
        currentLink = ''; // Limpia la URL
    });

    // Cierra la modal si se hace clic fuera de ella
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.remove('show-modal');
            currentLink = ''; // Limpia la URL
        }
    });

});