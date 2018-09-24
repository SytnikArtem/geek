$(document).ready(function() {
    $('.menu-left-item').hover(function() {
        var index = $(this).index();
        console.log(index);
        // $('.menu-right-item').removeClass('active');
        $('.menu-right-img').eq(index).addClass('active').siblings().removeClass('active');
    }, function(){
    });
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    dots: true,
    fade: true
    });
  $('.categories-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    dots: false
  });
});
