(function() {
    "use strict"



    var barraAltura = $('.header-principal').innerHeight();
    // console.log(barraAltura);

    $(window).scroll(function() { // esto escucha el SCROLL
        var scroll = $(window).scrollTop(); // esto ES NECESARIO para escuchar al scroll
        // console.log(scroll);
        if( scroll > barraAltura) {
            // console.log("ya te pasaste mano");
            $('.header-principal').addClass('fixed');
            $('body').css( { 'margin-top' : barraAltura +'px'} ); // esto hará que la barra NO OCULTE lo que habría debajo de ella
        }
        else {
            // console.log("aun no");
            $('.header-principal').removeClass('fixed');
            $('body').css( { 'margin-top': '0px'} );
        }
    });

    // MENU PARA MOBILES DINAMICO
    $('.menu-hamburguesa').on('click', function() {
        $('.menu-movil').slideToggle();
    });

})();