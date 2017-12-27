'use strict';
/* globals $, app */

define('admin/plugins/persona', ['settings'], function(Settings) {

  var ACP = {};

  ACP.init = function() {
    Settings.load('persona', $('.persona-settings'));

    $('#save').on('click', function() {
      Settings.save('persona', $('.persona-settings'), function() {
        app.alert({
          type: 'success',
          alert_id: 'persona-saved',
          title: 'Settings Saved',
          message: 'Persona settings saved'
        });
      });
    });
  };
  

  // This may not be the right place to put this code. But, doing it for now!
  console.log('testing');

  app.logout = function(e) {
  	return;
  };


  return ACP;
});