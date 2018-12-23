/**
 * @file
 * Custom js file to handle cookie personalization.
 */

(function ($, Drupal) {
  'use strict';

  if(drupalSettings.novartis_cookie !== undefined) {
    var set_paths = drupalSettings.novartis_cookie.terms_with_path;
  }

  Drupal.behaviors.cookiePersonlization = {
    attach: function (context, settings) {
      if ( context == document) {      // trst4();
        Drupal.indication.prepareIndications();
        Drupal.indication.storeIndications();
        Drupal.indication.storeActiveIndication();
        Drupal.indication.showIndicationSpecificData();
      }
    }
  };
  Drupal.behaviors.gatewayRedirect = {
    attach: function(context, settings) {
      if(window.location.pathname === '/' && set_paths !== undefined) {
        var indication = Drupal.indication;
        var active_indication = indication.getActiveIndication();
        if(active_indication !== null) {
          set_path(active_indication);
        }
        function set_path(active_indication) {
          for(var k in set_paths) {
            if(k == active_indication) {
              gatewayRedirect(set_paths[k]);
            }
          }
        }
        function gatewayRedirect(k) {
            setTimeout(function() {
             location.replace(k);
            }, 500);
        }
      }
    }
  }
})(jQuery, Drupal);
