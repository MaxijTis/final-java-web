
const loginForm = document.getElementById('contacto-form');

loginForm.addEventListener('submit', function(event) {

    // Prevenir la acción por defecto
    event.preventDefault();
    
    // Valores de los inputs
    const name = loginForm.name.value;
    const email = loginForm.email.value;
    const message = loginForm.message.value;
    
    // Div de errores
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reiniciar el texto 
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    // Mostrar mensaje de error si los inputs están vacíos
    if (name === '') {
        nameError.textContent = 'El nombre es obligatorio.';
    }

    if (email === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
    }
    
    if (message === '') {
        messageError.textContent = 'Debes enviar un mensaje obligatorio.';
    }

    if (email && nameError && message){
        window.location.href = '../index.html';
    }

});
