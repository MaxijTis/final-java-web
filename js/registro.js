async function registerUser() {
    const nombreCompleto = document.getElementById('inputNombre').value;
    const emailCompleto = document.getElementById('inputEmail').value;
    const passwordCompleta = document.getElementById('inputPassword').value;
    const fechaCompleto = document.getElementById('inputFecha').value;

    const userData = {
        name: nombreCompleto,
        email: emailCompleto,
        password: passwordCompleta,
        birthdate: fechaCompleto,
    };

    try {
        const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert('Usuario registrado exitosamente');
            window.location.href = '../index.html';
        } else {
            alert('Error al registrar el usuario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al registrar el usuario');
    }
}