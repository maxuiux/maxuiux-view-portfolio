$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $('.slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="fas fa-angle-right"></i></div>',
    });

    $('.services-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1192,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 532,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });

    $('.price-form-btn').on('click', function () {
        $('.price-item-block, .price-item--modify1, .price-item--modify2, .price-item-btn, .price-item-block__text, .price ').toggleClass('active')
    });

    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        appendArrows: $('.news-slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 942,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 628,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        appendArrows: $('.team-slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 942,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 628,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.menu-btn, .menu-window__overlay').on('click', function () {
        $('.menu-window__inner, .menu-window__overlay, .menu-btn--1, .menu-btn--2').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.dropbtn').on('click', function () {
        $('.dropdown__list').slideToggle('active');
        $('.dropbtn__inner-icon').toggleClass('active')
    });

    $('.sources-and-credits__popup-modal').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 60,
    });

});