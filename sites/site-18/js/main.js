/*Первая строка нужна для загрузки скрипта.
И она обозначает, что в начале загружается страница иhtml,
и только после этого загружается js скрипт - $(function() */
$(function () {
    /*Чтобы обратиться к классу в html нужно прописать $('.reviews-slider')*/
    /*Чтобы подключить метод работы со скриптом slick.js - после $('.reviews-slider').slick({});
    это и есть подключение .slick({});*/

    /*.slick({}); - внутри {фигурных скобок будут написаны параметры,
    которые заставят рабоать слайдер} */
    $('.reviews-slider').slick({
        infinite: true, /*Зацикленость, бесконечная прокрутка слайдера*/
        slidesToShow: 2, /*2 Столбца*/
        slidesToScroll: 2, /*Скорость прокрутки 2*/
        arrows: false, /*Отключаем стандартные кнопки, вперед - назад*/
        dots: true, /*Точки внизу, переключатели*/

        responsive: [
            {
              breakpoint: 1106, /*Размер экрана, когда слайдер уже не влизает*/
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });

    /*При клике на btn__menu, я каждый раз с элементом*/
    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle(); /*Чтобы плавненько появлялся и исчезал*/
    })

});

$(document).ready(function(){
  $(".menu__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1200);
  });
});