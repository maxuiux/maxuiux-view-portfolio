$(function () {

    $('.headernav-left__btn, .menu-close').on('click', function () {
        $('.header-menu').toggleClass('active');
        $('.header-menu-position').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.search-btn, .headsearch-close').on('click', function () {
        $('.header-search').toggleClass('active-header-search');
        $('.header-search-position').toggleClass('active-header-search');
        $('body').toggleClass('lock')
    });

    $('.header-arrow__inner').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('.project-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 200,
        appendArrows: $('.slider-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev">Previous</div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next">Next</div>',
    });

    $('.project-mobile-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        speed: 400,
        appendArrows: $('.slider-mobile-arrow-btn'),
        prevArrow: '<div class="slider-arrow slider-arrow__prev">Previous</div>',
        nextArrow: '<div class="slider-arrow slider-arrow__next">Next</div>',
        responsive: [
            {
                breakpoint: 1225,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                var $svg = jQuery(data).find('svg');

                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                $svg = $svg.removeAttr('xmlns:a');

                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                $img.replaceWith($svg);

            }, 'xml');

        });
    });

    $('.faq-info__btn').on('click', function () {
        $(this).closest('.faq-item').toggleClass('active')
    });

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

    $('.sources-and-credits__popup-modal').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 60,
    });

    new WOW().init();

});