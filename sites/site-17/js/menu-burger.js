$(function () {
    $('.nav-icon-1').on('click', function () {
        $('.header-menu').fadeToggle(120);
    })
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


