
fetch('layouts/footer.html')
.then(response => response.text())
.then(html => footerContainer.innerHTML = html)
.catch(error => console.error(error));
