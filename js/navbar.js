
const rutaDinamica = new URL(window.location.href).origin;
const navbarPath = `${rutaDinamica}/layouts/navbar.html`;

fetch(navbarPath)
  .then(response => response.text())
  .then(html => headerContainer.innerHTML = html)
  .catch(error => console.error(error));
