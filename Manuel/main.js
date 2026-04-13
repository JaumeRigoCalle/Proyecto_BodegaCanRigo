(function () {
    let cambiarSugerencia = function() {
        let texto = document.getElementById("texto-recomendacion");
        let boton = document.getElementById("boton-recomendacion");

        if (texto.innerHTML == "") {
            texto.innerHTML = "Especialidad de la casa: Tabla de ibéricos y vino tinto - 15€";
            texto.style.color = "#f39c12";
            boton.innerHTML = "Ocultar";
        } else {
            texto.innerHTML = "";
            boton.innerHTML = "Recomendación del dia";
        }
    };

    let botonSugerencia = document.getElementById("boton-recomendacion");
    
    if (botonSugerencia != null) {
        botonSugerencia.addEventListener("click", cambiarSugerencia);
    }
}());