const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');

priceRange.addEventListener('input', () => {
    priceDisplay.textContent = `$${priceRange.value}`;
});

const products = [
    { id: 1, name: "Producto 1", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 1", price: 50, stock: 10 },
    { id: 2, name: "Producto 2", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 2", price: 60, stock: 8 },
    { id: 3, name: "Producto 3", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 3", price: 70, stock: 15 },
    { id: 4, name: "Producto 4", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 4", price: 80, stock: 12 },
    { id: 5, name: "Producto 5", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 5", price: 90, stock: 20 },
    { id: 6, name: "Producto 6", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 6", price: 100, stock: 5 },
    { id: 7, name: "Producto 7", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 7", price: 110, stock: 25 },
    { id: 8, name: "Producto 8", image: "../img/GOJ7mGsWoAAVHtm.jpg", description: "Descripción del Producto 8", price: 120, stock: 0 },
];

const filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const maxPrice = parseInt(priceRange.value, 10);

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= maxPrice;
        return priceMatch;
    });

    displayProducts(filteredProducts);
});

function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; 
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <p class="stock">${product.stock > 0 ? 'En existencia' : 'Agotado'}</p>
        `;
        
        productCard.addEventListener('click', () => {
            openModal(product);
        });
        
        productList.appendChild(productCard);
    });
}

displayProducts(products);

// Funciones para el modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalStock = document.getElementById('modalStock');
const addToCartButton = document.getElementById('addToCartButton');
const closeModal = document.getElementsByClassName('close')[0];

// Función para abrir el modal
function openModal(product) {
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `$${product.price}`;
    modalStock.textContent = `En existencia: ${product.stock}`;
    modal.style.display = "block";
}

// Función para cerrar el modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido osease en la pagina
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
