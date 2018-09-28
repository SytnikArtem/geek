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
  $('.item-gallery-block').slick({
    asNavFor: '.item-gallery-prev',
    infinite: false,
    draggable: false,
  });
  $('.item-gallery-prev').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.item-gallery-block',
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: true
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
  if($(window).width() > 992) {
    let width2 = $('.catalog-flex').width() / 4 - 20;
    $('.filter').css("width", width2);
  }
  else {
    $('.filter').css("width", 'auto');
  }

  $('.catalog-btn_mobile').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('Скрыть фильтр');
      $('.catalog-main').css("min-height", height + 250);
    }
    else {
      $(this).text('Уточнить поиск');
      $('.catalog-main').css("min-height", 'auto');
      console.log('w');
    }
    $('.catalog-filter').toggleClass('active');
  });
  var height = $('.filter').height();
  $('.catalog-btn_desctop').click(function() {

    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('Скрыть фильтр');
      $('.catalog-filter').css("min-height", height + 40);
    }
    else {
      $(this).text('Уточнить поиск');
      $('.catalog-filter').css("min-height", 'auto');
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
  $('.filter-close').click(function() {
    $('.catalog-filter').removeClass('active');
    $('.catalog-btn_mobile').toggleClass('active');
    // $('.catalog-filter').css("min-height", 'auto');
    //
    if ($('.catalog-btn_mobile').hasClass('active')) {
      $('.catalog-btn_mobile').text('Скрыть фильтр');
      $('.catalog-main').css("min-height", height + 250);
    }
    else {
      $('.catalog-btn_mobile').text('Уточнить поиск');
      $('.catalog-main').css("min-height", 'auto');
    }
  });
  $('.filter-row-check').click(function() {
    if($(this).is(':checked')) {
      $(this).closest('.filter-row').find('.filter-row-text').addClass('active');
    }
    else {
      $(this).closest('.filter-row').find('.filter-row-text').removeClass('active');
    }
  });
  $('.filter-color').click(function() {
    // $(this).toggleClass('active').siblings().removeClass('active');
    $(this).toggleClass('active');
  });
  var number = +$('.item-number').val();
  $('.item-change').click(function() {
    number = +$('.item-number').val();
    if($(this).hasClass('item-plus')) {
      number += 1;
      $('.item-number').val(number);
    }
    else {
      number -= 1;
      if (number < 2) {
        number = 1;
      }
      $('.item-number').val(number);

    }
  });
  $('.item-gallery-item').click(function() {
    let index = $(this).index();
    $('.item-img-big').eq(index).addClass('active').siblings().removeClass('active');
  });
  $('[data-fancybox="gallery"]').fancybox({
    thumbs : {
      autoStart : true,
      axis      : 'x'
    },
    infobar: false,
    buttons: [
      "close"
    ]
  });
  $('.order-btn').click(function() {
    $(this).closest('.order-item').find('.order-item-title').addClass('active');
    $(this).closest('.order-item').find('.order-slide-block').slideUp();
    $(this).closest('.order-item').next().find('.order-slide-block').slideDown();
    if($(this).hasClass('order-btn_last')) {
      $('.order-right-over').css('display', 'none');
    }
  });
  $('.order-item-title').click(function() {
    if($(this).hasClass('active')){
      $(this).closest('.order-item').find('.order-slide-block').slideToggle();
    }
  });
  $('.order-right-btn_grac').click(function() {
    $('.loader').fadeIn();
    setTimeout(function() {
      $('.order-container').fadeOut();
      $('.order-grac').fadeIn();
    }, 1000)
    setTimeout(function() {
      $('.loader').fadeOut();
    }, 2000)
  });
  $('.enter-to').click(function(){
    $('.left-reg').fadeIn();
    $('.right-reg').fadeIn();
  });
  $('.left-reg-close').click(function() {
    $('.left-reg').fadeOut();
    $('.right-reg').fadeOut();
  });
  $('.js-go').click(function() {
    let name = "." + $(this).data('name');
    $(name).addClass('active').siblings().removeClass('active');
    // console.log(name);
  })
});