var modal = document.getElementById("modal-cambiar-contrasena");
var btn = document.getElementById("verificar-respuesta");
var span = document.getElementsByClassName("cerrar")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
o
