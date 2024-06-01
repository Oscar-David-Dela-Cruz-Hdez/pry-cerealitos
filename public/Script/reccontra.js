document.addEventListener("DOMContentLoaded", function () {

    var modal = document.getElementById("modal-cambiar-contrasena");
    var btn = document.getElementById("verificar-respuesta");
    var span = document.getElementsByClassName("cerrar")[0];


    btn.onclick = function() {
        modal.style.display = "block";
    }


    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
