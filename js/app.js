(function ($) {
    "use strict";

    // sticky
    // $(window).on('scroll', function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 2) {
    //         $("#header-sticky").removeClass("sticky");
    //     } else {
    //         $("#header-sticky").addClass("sticky");
    //     }
    // });
    setTimeout(function () {
        $('.loader-bg').fadeToggle();
    }, 2200);



    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });


    // $('.service-active').slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1
    // });



    $('select').niceSelect();





})(jQuery);