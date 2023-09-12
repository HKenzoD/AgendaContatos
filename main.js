$('.buttonSobre').click(function() {
    const destino = $('#sobreALoja');

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})

$('.buttonProd').click(function() {
    const destino = $('#prod');

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})