$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        appendArrows: $('.slider-arrows__btn'),
        prevArrow: '<div class="slider-arrows slider-arrows__left"><div class="slider-arrows-btn"><div class="slider-arrows-btn__pos"><i class="fas fa-angle-left"></i></div></div></div>',
        nextArrow: '<div class="slider-arrows slider-arrows__right"><div class="slider-arrows-btn"><div class="slider-arrows-btn__pos"><i class="fas fa-angle-right"></i></div></div></div>'
    });

    $('.fastb-info__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        prevArrow: $('.slider-arrows-square, .slider-arrows-square__left'),
        nextArrow: $('.slider-arrows-square, .slider-arrows-square__right')
    });

    $('.hard-info__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dots',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 952,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true
                }
            }
        ]
    });

    $('.mode-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        appendArrows: $('.mode-arrows-square__btn'),
        prevArrow: '<div class="slider-arrows-square slider-arrows-square__left"><i class="fas fa-angle-up"></i></div>',
        nextArrow: '<div class="slider-arrows-square slider-arrows-square__right"><i class="fas fa-angle-down"></i></div>',
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    verticalSwiping: false,
                }
            }
        ]
    });

    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        appendArrows: $('.news-arrows-square__btn'),
        prevArrow: '<div class="slider-arrows-square slider-arrows-square__left"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrows-square slider-arrows-square__right"><i class="fas fa-angle-right"></i></div>'
    });

    $('.expert-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        appendArrows: $('.expert-arrows-square__btn'),
        prevArrow: '<div class="slider-arrows-square slider-arrows-square__left"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slider-arrows-square slider-arrows-square__right"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1184,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 952,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
            }
        ]
    });

    $('.store-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'store-slider-dots',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 952,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true
                }
            }
        ]
    });

    $('.customers-box-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.customers-slider',
        arorws: false,
        prevArrow: false,
        nextArrow: false,
        focusOnSelect: true,
        speed: 0,
        responsive: [
            {
                breakpoint: 874,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 454,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.customers-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.customers-box-slider',
        infinite: true,
        centerMode: true,
        speed: 400,
        appendArrows: $('.customers-arrows-square__btn'),
        prevArrow: '<div class="slider-arrows-square slider-arrows-square__left"><i class="arrow left"></div>',
        nextArrow: '<div class="slider-arrows-square slider-arrows-square__right"><i class="fas fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1648,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1268,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.aboutus-box-info__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.aboutus-box-slider',
        infinite: true,
        arorws: false,
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        speed: 0,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $('.aboutus-box-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.aboutus-box-info__slider',
        infinite: true,
        arrows: false,
        prevArrow: false,
        nextArrow: false,
        fade: true,
        speed: 50,
    });

    $('.parallax-circle-btn__popup-youtube').magnificPopup({
        disableOn: 900,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        preloader: false,
    });

    $('.customers-slider-item__img-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        removalDelay: 60,
        image: {
            verticalFit: true
        }
    });

    $('.sources-and-credits__popup-modal').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 60,
    });

    $('.use-basket-btn, .basket-popup__close, .basket-popup__total-icon').on('click', function () {
        $('.use-basket-btn, .basket-popup, .basket-popup__close, .basket-popup__total-icon').toggleClass('active');
    });

    $('.search-btn, .search__close').on('click', function (event) {
        $('.search').toggleClass('active-search');
        $('body').toggleClass('lock');
    });

    $('.menu-btn, .menu__close').on('click', function (event) {
        $('.menu').toggleClass('active-menu');
        $('body').toggleClass('lock');
    });

    var wow = new WOW(
        {
            mobile: false
        }
    );
    new WOW().init();

    function footerToBottom() {
        var browserHeight = $(window).height(),
            footerOuterHeight = $('footer').outerHeight(true),
            mainHeightMarginPaddingBorder = $('.main').outerHeight(true) - $('.main').height() + 3;
        $('.main').css({
            'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
        });
    };
    footerToBottom();
    $(window).resize(function () {
        footerToBottom();
    });


    $('.faq-btn__inner').on('click', function () {
        $(this).closest('.faq-box').toggleClass('active-faq');
        $(this).closest('.faq-block').toggleClass('active-faq-ico')
    });

    $('.minus-circle').on('click', function () {
        $(this).closest('.sidebar-product__li').toggleClass('minus')
    });

    var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 400,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 50,
        to: 400,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });

});