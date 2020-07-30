$(document).ready(function () {
  //Всплывающее меню
  $('.slider__wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000
  });
  jQuery(window).scroll(function() { 
    if (jQuery(window).scrollTop() > 520) {
      jQuery('.up').fadeIn(300);
    } else {
      jQuery('.up').fadeOut(300);
    }
   });
  if ($(window).width() < 993) {
    $('.burger').on('click', function() {
      $(this).addClass('burger__active');
      $('.header__menu').addClass('header__menu__active');
    });
    $('.close').on('click', function() {
      $('.burger').removeClass('burger__active');
      $('.header__menu').removeClass('header__menu__active');
    });
  }
});