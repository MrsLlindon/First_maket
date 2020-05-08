$(function() {

  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-next slick__btn"></button>',
    prevArrow: '<button type="button" class="slick-prev slick__btn"></button>',
  });

  $('select').styler();
  $('.quote').slick({
    nextArrow: '<button type="button" class="slick-next-quote slick__btn-quote"></button>',
    prevArrow: '<button type="button" class="slick-prev-quote slick__btn-quote"></button>',
  });

  $('.menu__media-btn').on('click', function(){
    $('.menu__content').slideToggle();
    
  });







});