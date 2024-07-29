$(function () {

    $('.menu-btn, .window__overlay').on('click', function () {
        $('.contact-navigation, .contact-navigation__wrap, .menu-btn, .window__overlay').toggleClass('active');
        $('body').toggleClass('lock')
    });

    var mixer = mixitup('.photo-mix', {
        selectors: {
            target: '.photo-mix__item'
        },
        animation: {
            duration: 400,
        }
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

});