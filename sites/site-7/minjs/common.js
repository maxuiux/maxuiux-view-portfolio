$(function () {

    var sliderArrowPrev =
        '<div class="slider-arrow slider-arrow__prev"><svg viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.538409 6.65685 0.928934L0.292892 7.2929ZM25 7L1 7L1 9L25 9L25 7Z" /></svg></div>';
    var sliderArrowNext =
        '<div class="slider-arrow slider-arrow__next"><svg viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.7071 8.70711C25.0976 8.31659 25.0976 7.68342 24.7071 7.2929L18.3431 0.928935C17.9526 0.538411 17.3195 0.538411 16.9289 0.928935C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-1.74846e-07 9L24 9L24 7L1.74846e-07 7L-1.74846e-07 9Z" /></svg></div>';
    // #reviews-slider and partners-slider

    $('.masters-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 12000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    var gallery = $('.last-works-slider__item a');
    //при клике на ссылку в слайде запускаем галерею
    $('.last-works-slider__item a').on('click', function (e) {
        e.preventDefault();
        //узнаём индекс слайда без учёта клонов
        var totalSlides = +$(this).parents('.last-works-slider').slick("getSlick").slideCount,
            dataIndex = +$(this).parents('.last-works-slider__item').data('slick-index'),
            trueIndex;
        switch (true) {
            case (dataIndex < 0):
                trueIndex = totalSlides + dataIndex; break;
            case (dataIndex >= totalSlides):
                trueIndex = dataIndex % totalSlides; break;
            default:
                trueIndex = dataIndex;
        }
        //вызывается элемент галереи, соответствующий индексу слайда
        $.fancybox.open(gallery, {}, trueIndex);
        return false;
    });

    $('.last-works-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        appendArrows: $('.last-works-slider__arrow-btn'),
        prevArrow: '<div class="last-works-slider-arrow last-works-slider-arrow__prev"><svg viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.538409 6.65685 0.928934L0.292892 7.2929ZM25 7L1 7L1 9L25 9L25 7Z" /></svg></div>',
        nextArrow: '<div class="last-works-slider-arrow last-works-slider-arrow__next"><svg viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.7071 8.70711C25.0976 8.31659 25.0976 7.68342 24.7071 7.2929L18.3431 0.928935C17.9526 0.538411 17.3195 0.538411 16.9289 0.928935C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-1.74846e-07 9L24 9L24 7L1.74846e-07 7L-1.74846e-07 9Z" /></svg></div>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        customPaging: function () {
            return ''
        }

    });

    $('.reviews-slider').on('init reInit', function (event, slick) {
        $('.reviews-slider__arrow-btn-counter').text(3 + ' из ' + slick.slideCount);
    })
    $(".reviews-slider").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.reviews-slider__arrow-btn-counter').text(currentSlide + 3 + ' из ' + slick.slideCount);
    });
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.reviews-slider__arrow-btn'),
        prevArrow: sliderArrowPrev,
        nextArrow: sliderArrowNext,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.partners-slider').on('init reInit', function (event, slick) {
        $('.partners-slider__arrow-btn-counter').text(4 + ' из ' + slick.slideCount);
    })
    $(".partners-slider").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.partners-slider__arrow-btn-counter').text(currentSlide + 4 + ' из ' + slick.slideCount);
    });
    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        appendArrows: $('.partners-slider__arrow-btn'),
        prevArrow: sliderArrowPrev,
        nextArrow: sliderArrowNext,
        dots: false,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    AOS.init();

    $('.menu-btn').on('click', function () {
        $('.menu-btn').toggleClass('menu-btn--active');
        $('.sidebar').toggleClass('sidebar--active');
        $('.sidebar-overlay').toggleClass('sidebar-overlay--active');
        $("body").toggleClass("lock");

        if ($('.menu-btn').hasClass('menu-btn--active')) {
            $('.sidebar-overlay--active').on('click', function () {
                $('.menu-btn').removeClass('menu-btn--active');
                $('.sidebar').removeClass('sidebar--active');
                $('.sidebar-overlay').removeClass('sidebar-overlay--active');
                $("body").removeClass("lock");
            });
        }
    });

});