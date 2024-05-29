const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');

priceRange.addEventListener('input', () => {
    priceDisplay.textContent = `$${priceRange.value}`;
});
