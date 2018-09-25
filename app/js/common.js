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
    dots: true
  });
  var height = $('.mobile-left-list.active').height();
  $('.mobile-left-slide').css('height', height);
  $('.mobile-left').click(function() {
    $('.mobile-left-overlay').addClass('active');
  });
  $('.mobile-left-item_enter').click(function(){
    $('.mobile-left-list').removeClass('active');
    $('.mobile-left-list').eq(1).addClass('active');
    height = $('.mobile-left-list.active').height();
    $('.mobile-left-slide').css('height', height);
  });
  $('.mobile-left-item_first').click(function(){
    $(this).closest('.mobile-left-list').removeClass('active')
    $('.mobile-left-list').eq(0).addClass('active');
    height = $('.mobile-left-list.active').height();
    $('.mobile-left-slide').css('height', height);
  });
});
