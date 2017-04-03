'use strict';

(function(module) {
  const projectController = {};

  projectController.init = function() {
    $('.tab-content').hide();
    $('#projects-section').show();
    $('#project-stats').show();
  }

  module.projectController = projectController;
})(window);
