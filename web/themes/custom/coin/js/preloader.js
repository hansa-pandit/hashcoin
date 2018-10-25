/*

jQuery(document).ready(function() {

  $(window).load(function(){
    $('.loader').fadeOut();
  });
});*/

/*
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.header = {
    attach: function (context, settings) {

    /!* $(window).load(function () {
        $('#loading').fadeOut(150);
        $('#loading').fadeOut(350).delay(200, function () {
          $(this).remove();
        });
      });
*!/
      (window).load(function() {
        // When the page has loaded
        $("body").css('display', 'block');
      });


    }
  };


})(jQuery, Drupal);
*/

Drupal.behaviors.preloader = {
  attach: function (context, settings) {

    $( "body" ).append( "<div class='loader'>Test</div>" );


  }
};
