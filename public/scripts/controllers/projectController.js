'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function() {
    //$('.nav-links').hide();
    $('.tab-content').hide();
    $('#profile-links').hide();
    $('#project-stats').show();
    $('#projects').show();
  }

  module.projectController = projectController;
})(window);
