$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        speed: 450,
        appendArrows: $('.header-slider-arrow-btn'),
        nextArrow: '<div class="header-slider-arrow "></div>',
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3500,
                    speed: 600,
                }
            },
        ]
    });

    $('.solition-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        appendArrows: $('.slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.mobile-register-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        speed: 450,
        appendArrows: $('.mobile-register-slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"></div>',
    });

    $('.slider-dots').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.fast-mobile-slider',
        arrows: false,
        prevArrow: false,
        nextArrow: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 432,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.fast-mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-dots',
        arrows: false,
        prevArrow: false,
        nextArrow: false
    });

    $('.sources-and-credits__popup-modal').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 60,
    });

    $('.menu-btn').on('click', function () {
        $('.navigation, .menu-btn').toggleClass('active'),
            $('body').toggleClass('lock')
    });

});