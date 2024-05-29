// Obtener elementos del DOM
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalStock = document.getElementById('modalStock');
const addToCartButton = document.getElementById('addToCartButton');
const closeModal = document.getElementsByClassName('close')[0];

// Datos de ejemplo de productos (puedes reemplazarlos con tus datos reales)
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

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Añadir evento a cada tarjeta de producto
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        openModal(products[index]);
    });
});

// Filtrado de precios
const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');

priceRange.addEventListener('input', () => {
    priceDisplay.textContent = `$${priceRange.value}`;
});

// Filtrado de productos
const filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const selectedSizes = Array.from(filterForm.elements['size'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        
    const selectedStates = Array.from(filterForm.elements['state'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        
    const maxPrice = parseInt(priceRange.value, 10);

    const filteredProducts = products.filter(product => {
        const sizeMatch = selectedSizes.includes('all') || selectedSizes.some(size => product.size === size);
        const stateMatch = selectedStates.length === 0 || selectedStates.some(state => product.state === state);
        const priceMatch = product.price <= maxPrice;

        return sizeMatch && stateMatch && priceMatch;
    });

    displayProducts(filteredProducts);
});

// Función para mostrar productos
function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Limpiar lista de productos
    
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

// Inicializar con todos los productos
displayProducts(products);
