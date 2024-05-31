const createCard = (productos) => {
    return `
        <div class="col">
            <div class="card">
                <img src="${productos.image}" class="card-img-top p-3" alt="${productos.title}">
                <div class="card-body">
                    <h5 class="card-title">${productos.title}</h5>
                    <p class="card-text"><small>${productos.description}</small></p>
                </div>
                <div class="mb-5 d-flex justify-content-around mt-3">
                    <h3>$ ${productos.price}</h3>
                    <button class="btn btn-primary"><i class="bi bi-cart4"></i> Add</button>
                </div>
            </div>
        </div>
    `;
}

const fetchData = async () => {
    try {
        const api = await fetch('https://fakestoreapi.com/products')
        const data = await api.json()
        const container = document.querySelector('.row');
        data.forEach(productos => {
            const card = createCard(productos);
            container.innerHTML += card;
        });
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", fetchData);
