'use strict';

(function(module) {
  const profileController = {};

  profileController.init = function() {
    $('.tab-content').hide();
    $('#profile-links').show();
  };

  module.profileController = profileController;
})(window);
