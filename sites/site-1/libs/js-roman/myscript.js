$(document).ready(function(){
    
    $('.work-slider-top-cont').clone().appendTo('.work-slider-top');
    $('.work-slider-bot-cont').clone().appendTo('.work-slider-bot');

    $('.header-hamburget').click(function(){
        if ($('header').hasClass('mini')) {
            $('header').removeClass('mini');
            $('body').removeClass('no-scroll');
            $('.anim-header-mob-menu').removeClass('active');
        }
        else {
            $('header').addClass('mini');
            $('body').addClass('no-scroll');
            $('.anim-header-mob-menu').addClass('active');
        }
    });

    $('[href^="#"]').click(function(){
        $('header').removeClass('mini');
        $('body').removeClass('no-scroll');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 900);
        return false;
    });

    $('.example-slider-arrow-next').click(function(){
        $('.example-slider-e').addClass('move-left');
        setTimeout(function(){
            $('.example-slider-e').removeClass('move-left');
            $('.example-slider .example-slider-e:first-child').appendTo($('.example-slider'));
            var num = $('.example-slider .example-slider-e:nth-child(2)').attr('data-num');
            $('.example-slider-num-current').text(num);
        }, 400);
    });

    $('.example-slider-arrow-prev').click(function(){
        $('.example-slider-e').addClass('move-right');
        setTimeout(function(){
            $('.example-slider-e').removeClass('move-right');
            $('.example-slider .example-slider-e:last-child').prependTo($('.example-slider'));
            var num = $('.example-slider .example-slider-e:nth-child(2)').attr('data-num');
            $('.example-slider-num-current').text(num);
        }, 400);
    });



})




/*========================================================================*/

$(document).ready(function(){

    $(".stage-slider").slick({
        prevArrow: '<div class="slick-prev" aria-label="Previous"></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"></div>',
        infinite: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.stage-slider-arrow'),
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    
    $(".projects-info-e-content-pic-e-foto-slider").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
    });
    
    
    $(".projects-info-e-content-pic-e-foto-slider-mob-step2").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
    });
    
    // Выводим номер текущего слайда 
	$(".projects-info-e-content-pic-e-foto-slider-mob-step2").on("afterChange", function(event, slick, currentSlide, nextSlide){
	    $(".projects-info-e-content-pic-e-foto-slider-mob-num-current-step2").text(currentSlide + 1);
	});	
	
	// Выводим общее количество слайдов
	$('.projects-info-e-content-pic-e-foto-slider-mob-num-total-step2').text($(".projects-info-e-content-pic-e-foto-slider-mob-step2").slick("getSlick").slideCount);
	
    
    $(".projects-info-e-content-pic-e-foto-slider-mob-step3").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
    });
    
    // Выводим номер текущего слайда 
	$(".projects-info-e-content-pic-e-foto-slider-mob-step3").on("afterChange", function(event, slick, currentSlide, nextSlide){
	    $(".projects-info-e-content-pic-e-foto-slider-mob-num-current-step3").text(currentSlide + 1);
	});	
	
	// Выводим общее количество слайдов
	$('.projects-info-e-content-pic-e-foto-slider-mob-num-total-step3').text($(".projects-info-e-content-pic-e-foto-slider-mob-step3").slick("getSlick").slideCount);
	
    
    $(".projects-info-e-content-pic-e-foto-slider-mob-step4").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
    });
    
    // Выводим номер текущего слайда 
	$(".projects-info-e-content-pic-e-foto-slider-mob-step4").on("afterChange", function(event, slick, currentSlide, nextSlide){
	    $(".projects-info-e-content-pic-e-foto-slider-mob-num-current-step4").text(currentSlide + 1);
	});	
	
	// Выводим общее количество слайдов
	$('.projects-info-e-content-pic-e-foto-slider-mob-num-total-step4').text($(".projects-info-e-content-pic-e-foto-slider-mob-step4").slick("getSlick").slideCount);
    
	
    
    
	
	
	////////////////////////////////////////////////////////////////////////////
    
    
    $(".projects-info-e-content2-slider").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        accessibility: false,
    });
    
    $(".agreement-slider").slick({
        infinite: true,
        dots: false,
        variableWidth: false, 
        slidesToShow: 2,
        slidesToScroll: 1,
        accessibility: false,
        responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    }
                ]
    });       
    
    $('.tarif-info-e-cont-item-more').click(function(){
    	$('.tarif-info-e-cont-item-more').hide();
    	$('.tarif-info-e-cont-item-other').slideDown(300);
    })
    
    $('.projects-info-e-content-text-task-problem-mob-toggle-e').click(function(){
    	$(this).parents('.projects-info-e-content-text-task-problem-mob').find('.projects-info-e-content-text-task-problem-mob-toggle-e').removeClass('active');
    	$(this).addClass('active');
    	
    	$(this).parents('.projects-info-e-content-text-task-problem-mob').find('.projects-info-e-content-text-task-problem-mob-info > div').hide();
    	$(this).parents('.projects-info-e-content-text-task-problem-mob').find('.projects-info-e-content-text-task-problem-mob-info > div[data-title=' + $(this).attr('data-title') + ']').show();
    })

});


$(document).ready(function(){

    var height_window = $(window).height();
    var height_window_half = $(window).height() * 0.7;

    $(window).scroll(function() {

        if($('.plan-work').length) {
            var bafore_plan_work = $('.plan-work').offset().top;
            var height_plan_work = $('.plan-work').outerHeight();

            var start_move_scale = $(window).scrollTop() >= bafore_plan_work - height_window_half;
            var end_move_scale = $(window).scrollTop() <= bafore_plan_work - height_window_half + height_plan_work;
            var height_plan_work_scale = $(window).scrollTop() - bafore_plan_work + height_window_half ;

            var bafore_plan_work_e_wrap_e2 = $('.plan-work-e-wrap.e2').offset().top;
            var bafore_plan_work_e_wrap_e3 = $('.plan-work-e-wrap.e3').offset().top;

            if (start_move_scale && end_move_scale) {
                $('.plan-work-scale').css({height: height_plan_work_scale + 'px'})
            } else {}

            var plan_work_e_stage_separate_e1 = $('.plan-work-e-stage-separate.e1')?.offset()?.top;
            var plan_work_e_stage_separate_e2 = $('.plan-work-e-stage-separate.e2')?.offset()?.top;
            var plan_work_e_stage_separate_e3 = $('.plan-work-e-stage-separate.e3')?.offset()?.top;
            var plan_work_e_stage_separate_e4 = $('.plan-work-e-stage-separate.e4')?.offset()?.top;
            var plan_work_e_stage_separate_e5 = $('.plan-work-e-stage-separate.e5')?.offset()?.top;
            var plan_work_e_stage_separate_e6 = $('.plan-work-e-stage-separate.e6')?.offset()?.top;
            var plan_work_e_stage_separate_e7 = $('.plan-work-e-stage-separate.e7')?.offset()?.top;
            var plan_work_e_stage_separate_e8 = $('.plan-work-e-stage-separate.e8')?.offset()?.top;

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e1 - height_window_half) {
                $('.plan-work-e-stage-separate.e1').addClass('active');
                $('.plan-work-e-stage-desc.e1').addClass('active');
                $('.plan-work-e-pic-wrap.e1').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e1').removeClass('active');
                $('.plan-work-e-stage-desc.e1').removeClass('active');
                $('.plan-work-e-pic-wrap.e1').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e2 - height_window_half) {
                $('.plan-work-e-stage-separate.e2').addClass('active');
                $('.plan-work-e-stage-desc.e2').addClass('active');
                $('.plan-work-e-pic-wrap.e2').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e2').removeClass('active');
                $('.plan-work-e-stage-desc.e2').removeClass('active');
                $('.plan-work-e-pic-wrap.e2').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e3 - height_window_half) {
                $('.plan-work-e-stage-separate.e3').addClass('active');
                $('.plan-work-e-stage-desc.e3').addClass('active');
                $('.plan-work-e-pic-wrap.e3').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e3').removeClass('active');
                $('.plan-work-e-stage-desc.e3').removeClass('active');
                $('.plan-work-e-pic-wrap.e3').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e4 - height_window_half) {
                $('.plan-work-e-stage-separate.e4').addClass('active');
                $('.plan-work-e-stage-desc.e4').addClass('active');
                $('.plan-work-e-pic-wrap.e4').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e4').removeClass('active');
                $('.plan-work-e-stage-desc.e4').removeClass('active');
                $('.plan-work-e-pic-wrap.e4').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e5 - height_window_half) {
                $('.plan-work-e-stage-separate.e5').addClass('active');
                $('.plan-work-e-stage-desc.e5').addClass('active');
                $('.plan-work-e-pic-wrap.e5').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e5').removeClass('active');
                $('.plan-work-e-stage-desc.e5').removeClass('active');
                $('.plan-work-e-pic-wrap.e5').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e6 - height_window_half) {
                $('.plan-work-e-stage-separate.e6').addClass('active');
                $('.plan-work-e-stage-desc.e6').addClass('active');
                $('.plan-work-e-pic-wrap.e6').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e6').removeClass('active');
                $('.plan-work-e-stage-desc.e6').removeClass('active');
                $('.plan-work-e-pic-wrap.e6').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e7 - height_window_half) {
                $('.plan-work-e-stage-separate.e7').addClass('active');
                $('.plan-work-e-stage-desc.e7').addClass('active');
                $('.plan-work-e-pic-wrap.e7').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e7').removeClass('active');
                $('.plan-work-e-stage-desc.e7').removeClass('active');
                $('.plan-work-e-pic-wrap.e7').removeClass('active');
            }

            if ($(window).scrollTop() >= plan_work_e_stage_separate_e8 - height_window_half) {
                $('.plan-work-e-stage-separate.e8').addClass('active');
                $('.plan-work-e-stage-desc.e8').addClass('active');
                $('.plan-work-e-pic-wrap.e8').addClass('active');
            } else {
                $('.plan-work-e-stage-separate.e8').removeClass('active');
                $('.plan-work-e-stage-desc.e8').removeClass('active');
                $('.plan-work-e-pic-wrap.e8').removeClass('active');
            }
        }

    });

    $('.faq-info-item-title').click(function(){
        $(this).toggleClass('active');
        $(this).parents('.faq-info-item').find('.faq-info-item-desc').slideToggle(300);
    });
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 1000 ) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

$(window).scroll(function() {

    $('.scroll-anim-move-rotate').each(function(){
        var height_window = $(window).height();
        var before_elem = $(this).offset().top;

        if ( $(window).scrollTop() + height_window - height_window/5> before_elem ) {
            $(this).addClass('visible');
        }
        else {
            $(this).removeClass('visible');
        }
    });

    $('.scroll-anim-move-to-left').each(function(){
        var height_window = $(window).height();
        var before_elem = $(this).offset().top;

        if ( $(window).scrollTop() + height_window - height_window/5> before_elem ) {
            $(this).addClass('visible');
        }
        else {
            $(this).removeClass('visible');
        }
    });

    $('.scroll-anim-move-to-up').each(function(){
        var height_window = $(window).height();
        var before_elem = $(this).offset().top;

        if ( $(window).scrollTop() + height_window - height_window/5> before_elem ) {
            $(this).addClass('visible');
        }
        else {
            $(this).removeClass('visible');
        }
    });

    $('.pic-fon-scroll').each(function(){
        var height_window = $(window).height();
        var before_elem = $(this).offset().top;
        var height_elem = $(this).height();

        if ( $(window).scrollTop() + height_window >= before_elem && $(window).scrollTop() < before_elem + height_elem ) {
            var length_move = $(window).scrollTop() + height_window - before_elem;
            var length_move = length_move/10;
            $(this).css({backgroundPosition:'0px -' + length_move + 'px' })
        }
    });

    $('.pic-scroll').each(function(){
        var height_window = $(window).height();
        var before_elem = $(this).offset().top;
        var height_elem = $(this).height();

        if ( $(window).scrollTop() + height_window >= before_elem && $(window).scrollTop() < before_elem + height_elem ) {
            var length_move = $(window).scrollTop() + height_window - before_elem;
            var length_move = length_move/10;

            $(this).css({top:'-' + length_move + 'px'});
        }
    });

});

$(function(){

    $('.show-hint-mark').click(function(){

        if($(this).hasClass('active')) {
            $('.show-hint-mark').removeClass('active');
            $('.show-hint').removeClass('active');
            $('.show-hint-popup').fadeOut(200);
        }

        else {
            $('.show-hint-mark.active').removeClass('active');
            $('.show-hint.active').removeClass('active');
            $('.show-hint-popup').fadeOut(100);
            $(this).addClass('active');
            $(this).parent().addClass('active');
            $(this).next().fadeIn(200);
        };

    });

    $('.show-hint-2-mark').click(function(){

        if($(this).hasClass('active')) {
            $('.show-hint-2-mark.active').removeClass('active');
            $('.show-hint-2.active').removeClass('active');
            $('.show-hint-2-popup').fadeOut(300);
        }
        else {
            $('.show-hint-2-mark.active').removeClass('active');
            $('.show-hint-2.active').removeClass('active');
            $('.show-hint-2-popup').fadeOut(200);
            $(this).addClass('active');
            $(this).parent().addClass('active');
            $(this).next().fadeIn(200);

        };
    });

})

