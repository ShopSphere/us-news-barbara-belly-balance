const widgetMatreshkaSale = '50%';
const widgetMatreshkaSale2 = '30%';
const widgetMatreshkaSale3 = '15%';

let flag = 0;
$('.prewin').on('click', function () {
   $(".click-here").css("display", "none");
   $(".matreshka__item img").css("animation", "none");
   if (flag === 0) {
      flag = 1;
      // $(this).hide(300);
      if ($(this).hasClass('red')) {
         $(this).next().children().addClass('grats');
         $('.sale-red').html(widgetMatreshkaSale);
         $('.sale-blue').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-yellow').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      if ($(this).hasClass('blue')) {
         $(this).next().children().addClass('grats');
         $('.sale-blue').html(widgetMatreshkaSale);
         $('.sale-yellow').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-red').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      if ($(this).hasClass('yellow')) {
         $(this).next().children().addClass('grats');
         $('.sale-yellow').html(widgetMatreshkaSale);
         $('.sale-blue').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-red').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      $(this).next().fadeIn(300);
      setTimeout(() => {
         // $('.prewin').hide(300);
         $('.win').show(300);
      }, 2000);
      setTimeout(() => {
         $(".spin-result-wrapper").fadeIn();
      }, 4000);
      setTimeout(() => {
         $(".spin-result-wrapper").fadeOut();
         $(".matreshka__wrapper").fadeOut();
         $(".order_block").fadeIn();
         $("html, body").animate({
            scrollTop: $('#roulette').offset().top // "#order_form0" block where animation scrolls
         }, 1000);
      }, 7000);


   }
})

let a = Math.ceil(Math.random()*3);
let text = '';
$('.prewins').on('click', function () {
   
   $(".click-here").css("display", "none");
   $(".matreshka__item img").css("animation", "none");
   if (flag === 0) {
      flag = 1;
         
      // $(this).hide(300);
      if (a == 1) {
          text = '.red'
      }
      if (a == 2) {
          text = '.blue'
      }
      if (a == 3) {
          text = '.yellow'
      }
      if ($(text).hasClass('red')) {
         $(text).next().children().addClass('grats');
         $('.sale-red').html(widgetMatreshkaSale);
         $('.sale-blue').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-yellow').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      if ($(text).hasClass('blue')) {
         $(text).next().children().addClass('grats');
         $('.sale-blue').html(widgetMatreshkaSale);
         $('.sale-yellow').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-red').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      if ($(text).hasClass('yellow')) {
         $(text).next().children().addClass('grats');
         $('.sale-yellow').html(widgetMatreshkaSale);
         $('.sale-blue').html((typeof widgetMatreshkaSale2 !== "undefined") ? widgetMatreshkaSale2 : "30%");
         $('.sale-red').html((typeof widgetMatreshkaSale3 !== "undefined") ? widgetMatreshkaSale3 : "15%");
      }
      $(text).next().fadeIn(300);
      setTimeout(() => {
         // $('.prewin').hide(300);
         $('.win').show(300);
      }, 2000);
      setTimeout(() => {
         $(".spin-result-wrapper").fadeIn();
      }, 4000);
      setTimeout(() => {
         $(".spin-result-wrapper").fadeOut();
         $(".matreshka__wrapper").fadeOut();
         $(".order_block").fadeIn();
         $("html, body").animate({
            scrollTop: $('#roulette').offset().top // "#order_form0" block where animation scrolls
         }, 1000);
      }, 7000);


   }
})

/*$(".pop-up-button").click(function (e) {
   e.preventDefault(), $(".spin-result-wrapper").fadeOut();
   $("html, body").animate({
      scrollTop: $('#roulette').offset().top // "#order_form0" block where animation scrolls
   }, 1000);
});*/


$(function () {
   $('a').not('#cert, .pop-up-button, #link_offer, #matreshka__title, #quiz-block a, .bot-btn').click(function () { // ".scrollto" - class on links
      $("html, body").animate({
         scrollTop: $('#roulette').offset().top // "#order_form0" block where animation scrolls
      }, 1000);
   });
});