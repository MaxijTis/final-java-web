
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = loginForm.email;
    const password = loginForm.password;

    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')

    if (email === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
    }

    if (password === '') {
        passwordError.textContent = 'La contraseña es obligatoria.';
    }
});
