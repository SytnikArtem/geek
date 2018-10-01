$(document).ready(function() {
  var time = 5, // времья перелистывания слайдов главного слайдера
      height,
      number,
      bar,
      $slick,
      tick,
      isPause,
      percentTime,
      $body;

  // Главное меню
    $('.menu-left-item').hover(function() {
        let index = $(this).index();
        $('.menu-right-img').eq(index).addClass('active').siblings().removeClass('active');
    });
    //Главный слайдер
  $slick = $('.slider-main');
  $slick.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    asNavFor: '.slider-prev',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
    });
    // прогрессбар
    bar = $('.progress');
    $('.slider-main .slick-dots li, .slider-main .slick-next').on({
      mouseenter: function() {
        isPause = true;
      },
      mouseleave: function() {
        isPause = false;
      }
    });
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }
    function interval() {
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        bar.css({
          width: percentTime+"%"
        });
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            startProgressbar();
          }
      }
    }
    function resetProgressbar() {
      bar.css({
       width: 0+'%'
      });
      clearTimeout(tick);
      }
      if($(window).width() > 768) {
        $('.slider-main .slick-dots, .slider-main .slick-next').click(function() {
          startProgressbar();
        });
        startProgressbar();
      }
    // Сладер превье след слайдов
    $('.slider-prev').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nav: false,
      dots: false,
      fade: true,
      asNavFor: '.slider-main'
    });
    // Слайдер элементов на главном экране
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
  //Слайдеры галереи
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
  //Расчёт высоты элементов бокового мобильного меню (нужно так как элементы абсолютно отпозиционированы)
  height = $('.mobile-left-list.active').height();
  $('.mobile-left-slide').css('height', height);
  $('.mobile-left').click(function() {
    $('.mobile-left-overlay').addClass('active');
    checkActive();
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
  // Закрытие меню по клике вне его области
  $('.mobile-left-overlay').click(function(e){
    let elem = $(".mobile-left-menu");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.mobile-left-overlay').removeClass('active');
    }
    checkActive();
  });
  // Функция отключеня прокрутки окна
  $body = $(window.document.body);

    function bodyFreezeScroll() {
        let bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        let bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0')
        $body.css('overflow', 'auto');
    }
  function checkActive() {
    if($('.mobile-right-overlay').hasClass('active') || $('.left-reg').hasClass('active') || $('.mobile-left-overlay').hasClass('active')) {
      bodyFreezeScroll()
    }
    else {
      bodyUnfreezeScroll()
    }
  }
  // открытие и закрытие меню корзины
  $('.mobile-right').click(function() {
    $('.mobile-right-overlay').addClass('active');
    checkActive();
  });
  $('.mobile-right-overlay').click(function(e){
    let elem = $(".mobile-right-menu");
    if(e.target!=elem[0]&&!elem.has(e.target).length)
    {
      $('.mobile-right-overlay').removeClass('active');
    }
    checkActive();
  });
  $('.mobile-right-close_menu').click(function() {
    $('.mobile-right-overlay').removeClass('active');
    checkActive();
  });
  // инициализация wow,js
  var wow = new WOW(
    {
      mobile: false,
      resetAnimation: false
    }
  );
  wow.init();
  // инициализация wow.js при наведении (нужна чтобы анимация повторялась)
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
  // Поиск
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
  // Расчёт блока с фильтром
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
  height = $('.filter').height();
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
    $(this).toggleClass('active');
  });
  // кнопки + и -
  number = +$('.item-number').val();
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
  // fancybox
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
  // Шаги в странице заказа
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
  // Переход к экрану благодарности за заказ
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
  // Открытие и закрытие страницы регистрации
  $('.enter-to').click(function(){
    $('.left-reg').addClass('active').fadeIn();
    $('.right-reg').fadeIn();
    checkActive();
  });
  $('.left-reg-close').click(function() {
    $('.left-reg').removeClass('active').fadeOut();
    $('.right-reg').fadeOut();
    checkActive();
  });
  // Переходы между страницами регистрации, пароля, авторизации
  $('.js-go').click(function() {
    let name = "." + $(this).data('name');
    $(name).addClass('active').siblings().removeClass('active');
  });
  // Ползунок
  $(".range-line").slider({
  	min: 0,
  	max: 5000,
  	values: [0,5000],
    step: 100,
  	range: true,
    stop: function(event, ui) {
  		$(".minCost").val($(".range-line").slider("values",0));
  		$(".maxCost").val($(".range-line").slider("values",1));
      },
    slide: function(event, ui){
      $(".minCost").val($(".range-line").slider("values",0));
      $(".maxCost").val($(".range-line").slider("values",1));
      },
  });
  $(".minCost").change(function(){
  	let value1 = $(".minCost").val();
  	let value2 = $(".maxCost").val();

      if(parseInt(value1) > parseInt(value2)){
  		value1 = value2;
  		$(".minCost").val(value1);
  	}
  	$(".range-line").slider("values",0,value1);
  });
  $(".maxCost").change(function(){
  	let value1 = $(".minCost").val();
  	let value2 = $(".maxCost").val();

  	if (value2 > 5000) { value2 = 5000;
      (".maxCost").val(5000)
    }

  	if(parseInt(value1) > parseInt(value2)){
  		value2 = value1;
  		$(".maxCost").val(value2);
  	}
  	$(".range-line").slider("values",1,value2);
  });
  $('.mobile-right-overlay').swipe({
      swipeRight:function(event, direction) {
        $(this).removeClass('active');
      }
  });
  $('.mobile-left-overlay').swipe({
      swipeLeft:function(event, direction) {
        $(this).removeClass('active');
      }
  });
});
