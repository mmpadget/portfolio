'use strict';

(function(module) {
  const statsController = {};

  statsController.init = function() {
    $('.tab-content').hide();
    $('#git-hub-stats').show();
  };

  module.statsController = statsController;
})(window);
