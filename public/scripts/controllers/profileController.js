'use strict';

(function(module) {
  const profileController = {};
  console.log('Profile view initiated!');

  profileController.init = function() {
    console.log('Inside of profileController.init()');
    $('.tab-content').hide();
    $('#projects').hide();
    $('#project-stats').hide();
    $('#profile-links').show();
  };

  module.profileController = profileController;
})(window);
