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

 /*  //Lazy load JS Native

  const images = document.querySelectorAll('.portfolio__href img');
  

  if (images) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    function handleImg(myImg, observer) {
        myImg.forEach(myImgSingle => {
            if (myImgSingle.intersectionRatio > 0) {
                loadImage(myImgSingle.target);
            }
        })
    }

    function loadImage(image) {
        image.src = image.getAttribute('data');
    }

    const observer = new IntersectionObserver(handleImg, options);

    images.forEach(img => {
        observer.observe(img);
    });
  }

  const author = document.querySelectorAll('.about__right img');

  if (author) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    function handleImg(myImg, observer) {
        myImg.forEach(myImgSingle => {
            if (myImgSingle.intersectionRatio > 0) {
                loadImage(myImgSingle.target);
            }
        })
    }

    function loadImage(image) {
        image.src = image.getAttribute('data');
    }

    const observer = new IntersectionObserver(handleImg, options);

    author.forEach(img => {
        observer.observe(img);
    });
  }
   */









});