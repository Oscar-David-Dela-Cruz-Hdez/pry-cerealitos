function mostrarDetallesProducto(nombre, imagen, descripcion, precio) {
    document.getElementById('modalNombreProducto').innerText = nombre;
    document.getElementById('modalImagenProducto').src = imagen;
    document.getElementById('modalDescripcionProducto').innerText = descripcion;
    document.getElementById('modalPrecioProducto').innerText = precio;
    document.getElementById('modalDetalles').style.display = "block";
}

function cerrarModal() {
    document.getElementById('modalDetalles').style.display = "none";
    document.getElementById('modalNombreProducto').innerText = "";
    document.getElementById('modalImagenProducto').src = "";
    document.getElementById('modalDescripcionProducto').innerText = "";
    document.getElementById('modalPrecioProducto').innerText = "";
}

