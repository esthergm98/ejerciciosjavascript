$("document").ready(function () {
        $("#carrete").hide()
        $("h1").show();
    })
    $(document).on("click", function(){
        $("h1").hide();
        $("#carrete").show()
    })
$("img").on("mouseover", function(){
    $(this).css("width", 300);
});
$("img").on("mouseout", function(){
    $(this).css("width", 250);
})
/*
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
*/