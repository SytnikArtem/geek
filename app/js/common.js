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
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 3000
    });
  $('.categories-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true
        }
      }
    ]
  });
  var height = $('.mobile-left-list.active').height();
  $('.mobile-left-slide').css('height', height);
  $('.mobile-left').click(function() {
    $('.mobile-left-overlay').addClass('active');
  });
  $('.mobile-left-item_enter').click(function(){
    let number = $(this).data("number");
    console.log(number);
    $('.mobile-left-list').eq(0).removeClass('active');
    $('.mobile-left-list').eq(number).addClass('active');
    height = $('.mobile-left-list.active').height();
    $('.mobile-left-slide').css('height', height);
  });
  $('.mobile-left-item_first').click(function(){
    $(this).closest('.mobile-left-list').removeClass('active')
    $('.mobile-left-list').eq(0).addClass('active');
    height = $('.mobile-left-list.active').height();
    $('.mobile-left-slide').css('height', height);
  });
  $('.mobile-left-overlay').click(function(e){
    let elem = $(".mobile-left-menu");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.mobile-left-overlay').removeClass('active');
    }
  });
  $('.mobile-right').click(function() {
    $('.mobile-right-overlay').addClass('active');
  });
  $('.mobile-right-overlay').click(function(e){
    let elem = $(".mobile-right-menu");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.mobile-right-overlay').removeClass('active');
    }
  });
  $('.mobile-right-close_menu').click(function() {
    $('.mobile-right-overlay').removeClass('active');
  });
  var wow = new WOW(
    {
      mobile: false,
      resetAnimation: false    // reset animation on end (default is true)
    }
  );
  wow.init();
  $('.menu-item').hover(function() {
    if ($('.wow').hasClass('animated')) {
      $(this).removeClass('animated');
      $(this).removeAttr('style');
      new WOW().init();
    }
  },
  function(){
    if ($('.wow').hasClass('animated')) {
      $(this).removeClass('animated');
      $(this).removeAttr('style');
      new WOW().init();
    }
  });
  $('.menu-item-link_search').click(function() {
    $(this).addClass('active');
    $('.menu-item-form').addClass('active');
  });
  $('.search-close').click(function() {
    $('.menu-item-link_search').removeClass('active');
    $('.menu-item-form').removeClass('active');
  });
  $('.menu-item-input').focusin(function() {
    $('.menu-item-all').slideDown();
  });
  $('.menu-item-input').blur(function() {
    $('.menu-item-all').slideUp();
  });
  $('.mobile-left-input').focusin(function() {
    $('.menu-item-all_mobile').slideDown();
  });
  $('.mobile-left-input').blur(function() {
    $('.menu-item-all_mobile').slideUp();
  });
  let width = $('.catalog-flex').width() / 4 - 20;
  $('.filter').css("width", width);
  $('.catalog-btn').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('Скрыть фильтр');
    }
    else {
      $(this).text('Уточнить поиск');
    }
    $('.catalog-filter').toggleClass('active');
    $('.catalog-flex').toggleClass('active');
    let width = $('.catalog-flex').width() / 4;
    console.log(width);
    if($('.catalog-filter').hasClass('active')) {
      $('.catalog-filter').css("width", width);
    }
    else {
      $('.catalog-filter').css("width", 0);
    }
  });
});
