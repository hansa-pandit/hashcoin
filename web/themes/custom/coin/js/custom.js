
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.header = {
    attach: function (context, settings) {

      var stickyOffset = $('.region-header-bottom').offset().top + 50 ;

      $(window).scroll(function(){
        var sticky = $('.region-header-bottom'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) {
          sticky.addClass('fixed');
        }
        else
        {
          sticky.removeClass('fixed');
        }
      });


    }
  };
  Drupal.behaviors.menu = {
    attach: function (context, settings) {

      if ($(window).width() > 991) {

          $('li.menu-item--expanded').hover(function() {
            $(this).find('ul.menu').stop(true, true).delay(200).fadeIn(500);

          }, function() {
            $(this).find('ul.menu').stop(true, true).delay(200).fadeOut(500);
        });
      }
    }
  };
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {

      $('.navbar-toggle', context).click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('.menu--main-menu').animate({width: 'toggle'});
      });
    }
  };

  Drupal.behaviors.menuAccordion = {
    attach: function (context, settings) {
      $('.menu-item--expanded', context).click(function(){
        $('.menu-item--expanded > .menu').slideToggle();
      });
    }
  };

  Drupal.behaviors.hashcoinSlick = {
    attach: function (context, settings) {
      // Convert field slide instances into slick slider.
      if ($('.view-top-slider').length > 0) {
        $('.view-top-slider .view-content').not('.slick-initialized').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 1000,
          dots: true,
          arrows: false
        });
      }

      if ($('#block-views-block-news-and-events-block-1').length > 0) {
        $('#block-views-block-news-and-events-block-1 .view-content').not('.slick-initialized').slick({
          infinite: false,
          loop: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          draggable: true,
          speed: 1000,
          dots: false,
          nextArrow:
              '<div class="slick-arrow-next">Next</div>',
          prevArrow:
              '<div class="slick-arrow-prev">Prev</div>',
          responsive: [

            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });
      }

      if ($('.view-testimonials').length > 0) {
        $('.view-testimonials .view-content').not('.slick-initialized').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: false,
          dots: true
        });
      }
      if ($('.view-partners').length > 0) {
        $('.view-partners .view-content').not('.slick-initialized').slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 7,
          speed: 1000,
          arrows: false,
          focusOnSelect:true,
          centerMode: true,


          centerPadding: '0px',

          responsive: [

            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
        });
      }
    }
  };
  Drupal.behaviors.banerImage = {
    attach: function (context, settings) {

      if ($(window).width() > 991) {

        $('#block-features').each(function () {
          if ($(this).find('.field--name-field-background-image img').length) {
            var imgSrc = $(this)
                .find('.field--name-field-background-image img')
                .attr('src');
            $(this)
                .find('.field--name-field-background-image img')
                .remove();
            $(this)
                .css('background-image', 'url(' + imgSrc + ')');
          }
        });
      }


      if ($('#block-joinus').length) {
        $('#block-joinus').each(function () {
          if ($(this).find('.field--type-image img').length) {
            var imgSrc = $(this)
                .find('.field--type-image img')
                .attr('src');
            $(this)
                .find('.field--type-image img')
                .remove();
            $(this)
                .css('background-image', 'url(' + imgSrc + ')');
          }
        });
      }

      if ($('.hc-blogs__wrapper').length) {
        $('.hc-blogs__wrapper').each(function () {
          if ($(this).find('.hc-blogs__image img').length) {
            var imgSrc = $(this)
                .find('.hc-blogs__image img')
                .attr('src');
            $(this)
                .find('.hc-blogs__image img')
                .remove();
            $(this)
                .find('.hc-blogs__image')
                .css('background-image', 'url(' + imgSrc + ')');
          }
        });
      }
      if ($('.hc-blogs__listing-wrapper').length) {
        $('.hc-blogs__listing-wrapper').each(function () {
          if ($(this).find('.hc-blogs__image img').length) {
            var imgSrc = $(this)
                .find('.hc-blogs__image img')
                .attr('src');
            $(this)
                .find('.hc-blogs__image img')
                .remove();
            $(this)
                .find('.hc-blogs__image')
                .css('background-image', 'url(' + imgSrc + ')');
          }
        });
      }
    }
  };
})(jQuery, Drupal);
