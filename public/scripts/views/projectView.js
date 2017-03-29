'use strict';

// TODO: IIFE present on at least one .js file. Ensure that your JS modules are written in an OOP fashion and are wrapped in an IFFE in order to expose the module to the window

(function(module) {

  const projectView = {};

  // For any child element, click "this"
  projectView.handleMainNav = function () {
    $('.nav-links').on('click', '.tab', function() {
      // Show the content of that tab.
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    });
    $('.nav-links .tab:first').click();
  };

  projectView.initIndexPage = function() {
    // eslint-disable-next-line
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });

    projectView.handleMainNav();
  };

  module.projectView = projectView;

}(window));
