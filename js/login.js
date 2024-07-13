const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async function (event) {
  // Prevenir la acción por defecto
  event.preventDefault();

  // Valores de los inputs
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Div de errores
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Reiniciar el texto
  emailError.textContent = "";
  passwordError.textContent = "";

  // Mostrar mensaje de error si los inputs están vacíos
  if (email === "") {
    emailError.textContent = "El correo electrónico es obligatorio.";
    return;
  }

  if (password === "") {
    passwordError.textContent = "La contraseña es obligatoria.";
    return; 
  }

  // Datos para la petición
  const loginData = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      window.location.href = "../index.html";
    } else {
      const errorText = await response.text();
      alert(`Error al iniciar sesión: ${errorText}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error al iniciar sesión");
  }
});
