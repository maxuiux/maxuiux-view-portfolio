$(function(){
    $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 150) $(".hd").css({top: '0', position: 'relative'});
    else $(".hd").css({top: '0', position: 'fixed'});
    });
});