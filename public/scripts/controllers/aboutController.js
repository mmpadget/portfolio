'use strict';

(function(module) {
  const aboutController = {};
  console.log('About view initiated!');

  aboutController.init = function() {
    console.log('Inside of aboutController.init()');
    $('.tab-content').hide();
    $('#profile-links').hide();
    $('#project-stats').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
