$(function () {

    $(function () {
        var typed = new Typed('.typed', {
            stringsElement: '.header-typed',
            typeSpeed: 75,
            backSpeed: 75,
            loop: true,
            backDelay: 700,
        });
    });

    $('.menu-btn').on('click', function () {
        $('.navigation-menu, .navigation-menu__inner, .menu, .vertical-line-box, .vertical-line-box__inner, .menu-btn-open__inner, .menu-btn-close__inner, .nav-btn--mobile').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.nav-btn, .navigation-site__overlay').on('click', function () {
        $('.navigation-site, .navigation-site-window__inner, .navigation-site-window--opacity, .nav-btn__inner').toggleClass('active')
    });

    $('.dark-theme-browser-support--pc').on('click', function () {
        $('.dark-theme-browser-support__list--pc').slideToggle('active')
    });

    $('.dark-theme-browser-support--mobile').on('click', function () {
        $('.dark-theme-browser-support__list--mobile').slideToggle('active')
    });

    $('.arrows-down').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $(function () {
        var mixer = mixitup('.portfolio-mix', {
            selectors: {
                target: '.portfolio-mix__item',

            },
            animation: {
                duration: 400,
            }
        });
    });

    $(".arrows-up").click(function () { $("html,body").animate({ scrollTop: 0 }, 800) });

});