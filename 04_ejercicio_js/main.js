
let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];

$("#anuncio").ready(function () {
    $("#anuncio").text("¡CLICK! para cambiar de color")
        .width(500)
        .height(500)
        .hide()
        .fadeIn(2000)
});


$("#anuncio").on("click", function() {

    let color = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background", color);

});