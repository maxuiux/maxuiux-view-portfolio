$(function () {

    $('.menu-btn, .menu-window__overlay').on('click keypress', function () {
        $('.menu-window__inner, .menu-window__overlay').toggleClass('active');
        $('body').toggleClass('lock')
    });

    function footerToBottom() {
        var browserHeight = $(window).height(),
            footerOuterHeight = $('.social--menu-footer').outerHeight(true),
            mainHeightMarginPaddingBorder = $('.menu-window--head').outerHeight(true) - $('.menu-window--head').height() + 0;
        $('.menu-window--head').css({
            'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
        });
    };
    footerToBottom();
    $(window).resize(function () {
        footerToBottom();
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

    $('.sources-and-credits__popup-modal').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 60,
    });

});