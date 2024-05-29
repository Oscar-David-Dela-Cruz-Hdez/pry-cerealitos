
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalStock = document.getElementById('modalStock');
const addToCartButton = document.getElementById('addToCartButton');
const closeModal = document.getElementsByClassName('close')[0];


const products = [
    { id: 1, name: "Producto 1", image: "../img/sticker-fan_13451696_a.png", description: "Descripción del Producto 1", price: 50, stock: 10 },
    { id: 2, name: "Producto 2", image: "../img/sticker-fan_13451696_a.png", description: "Descripción del Producto 2", price: 60, stock: 8 },
    { id: 3, name: "Producto 3", image: "../img/sticker-fan_13451696_a.png", description: "Descripción del Producto 3", price: 70, stock: 15 },
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


document.querySelectorAll('.product-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        openModal(products[index]);
    });
});