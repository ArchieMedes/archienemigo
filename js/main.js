(function() {
    "use strict"

    var anchoVentana = $(window).width();
    // console.log(anchoVentana);

    var barraAltura = $('.header-principal').innerHeight();
    console.log(barraAltura);

    $(window).scroll(function() { // esto escucha el SCROLL
        var scroll = $(window).scrollTop(); // esto ES NECESARIO para escuchar al scroll
        // console.log(scroll);
        if ( anchoVentana >= 992 ) {
            if( scroll > 1) {
                // console.log("ya te pasaste mano");
                $('.header-principal').addClass('fixed');
                $('body').css( { 'margin-top' : barraAltura +'px'} ); // esto hará que la barra NO OCULTE lo que habría debajo de ella
            }
            else {
                // console.log("aun no");
                $('.header-principal').removeClass('fixed');
                $('body').css( { 'margin-top': '0px'} );
            }
        }
        else {
            if( scroll > 0.1) {
                // console.log("ya te pasaste mano");
                $('.header-principal').addClass('fixed');
                $('body').css( { 'margin-top' :  barraAltura +'px'} ); // esto hará que la barra NO OCULTE lo que habría debajo de ella
            }
            else {
                // console.log("aun no");
                $('.header-principal').removeClass('fixed');
                $('body').css( { 'margin-top': '0px'} );
            }
        }
    });

    // MENU PARA MOBILES DINAMICO
    $('.menu-hamburguesa').on('click', function() {
        $('.menu-movil').slideToggle();
    });

})();