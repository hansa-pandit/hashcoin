(function ($, Drupal) {
  'use strict';
  // var ert;
  var maxValue,
  indication_store = [],
  tags,
  localStorage_indication,
  max = 1,
  storedCookie =[],
  store_object = {};
   Drupal.indication = {
        /**
         * Taking values from the indication atttribute.
         * @return {[Array]} [Returns an Array]
         */
        'prepareIndications': function() {
          var indication_tags = $("article").attr('data-indication');
          if(indication_tags) {
            indication_tags = indication_tags.split('|');
            return indication_tags;
          }
          return null;
        },

        /**
         * Storing the indications
         * @return {[object]} [Returns an Object]
         */
        'storeIndications' :function() {
          var assignStore = Drupal.indication.prepareIndications();
          if(assignStore) {
            for(var i=0; i < assignStore.length; i++) {
              store_object[assignStore[i]] = 1;
              var store_indications = JSON.parse(localStorage.getItem('indications'))
              if(store_indications === null) {
                localStorage.setItem('indications',  JSON.stringify(store_object));
              }
              else if(store_indications[assignStore[i]] === undefined) {
                var tt = {};
                tt[assignStore[i]] = 1;
                Object.assign(store_indications, tt);
                localStorage.setItem('indications',  JSON.stringify(store_indications));
              }
              else {
                store_indications[assignStore[i]] += 1;
                localStorage.setItem('indications',  JSON.stringify(store_indications));
              }
            }
            return localStorage.getItem('indications',  JSON.stringify(store_indications));
          }
        return null;
        },
        /**
         * Store the active Indication value
         * @param  {[string]} active_indication [description]
         * @param  {[string]} sent_via          [description]
         * @return {[type]}                   [description]
         */
        'storeActiveIndication': function(active_indication, sent_via) {
            var indication_value = Drupal.indication.globalLocalStorage();
            if(active_indication === undefined) {
              // Storing the indication values
              for(var key in  indication_value) {
                if(typeof(indication_value[key]) == 'number') {
                  storedCookie.push(indication_value[key])
                }
              }
              // Finding maximum values form the available indications
              if(storedCookie.length >=1) {
                max = storedCookie.reduce(function(a, b) {
                  return maxValue = Math.max(a, b);
                });
              }
              if(max >= 5) {
                var assignObject = Object.keys(indication_value).find(function(key) { 
                  if(indication_value[key] == max) {
                    return indication_value[key];
                  }
                }); 
                indication_value['active_indication'] = assignObject;
                indication_value['sent_via'] = 'cookie-personalisation';
              }
              if(indication_value !== undefined) {
                localStorage.setItem('indications', JSON.stringify(indication_value));
                return indication_value;
              }
            }
            else {
              // Replace the value with the parameter mentioned above.
              if(indication_value === null || indication_value === undefined) {
                indication_value = {};
              }
              indication_value['active_indication'] = active_indication;
              indication_value['sent_via'] = sent_via;
              localStorage.setItem('indications', JSON.stringify(indication_value));
              return indication_value;
            }

        },

        /**
         * Function which returns the active indication object only
         * @return {[string]} [returns form the localStorage Object]
         */
        'getActiveIndication': function() {
          var current_active_indication = null;
          var currentActiveState = Drupal.indication.globalLocalStorage();
          if(currentActiveState) {
            current_active_indication = currentActiveState["active_indication"];
          }
          return current_active_indication;
        },

        /**
         * Function which shows and hides the indication specific items.
         */
        'showIndicationSpecificData': function() {
          var active_page_indication = null;
          var page_indication = Drupal.indication.prepareIndications();
          if(page_indication && page_indication.length > 0) {
            // If page indication is available use data from there.
            active_page_indication = page_indication[0].split(':')[0];
          } else {
            // Use data from cookie personalization.
           var active_indication = Drupal.indication.getActiveIndication();
           if(active_indication) {
            active_page_indication = active_indication.split(':')[0];
           }
          }

          $('[data-show-on-indication]').each(function() {
            var data_show_indication = $(this).attr('data-show-on-indication');
            if(data_show_indication && (active_page_indication == data_show_indication)) {
              $(this).show();
            } else {
              $(this).addClass('hidden');
            }
          });

        },

        /**
         * Function to return Global indication storage Object.
         * @return {[object]} [returns form the localStorage Object]
         */
        'globalLocalStorage': function() {
          var storeGlobalStorage = localStorage.getItem('indications');
          if(storeGlobalStorage) {
            return JSON.parse(storeGlobalStorage);
          }
        }
      };
})(jQuery, Drupal);
