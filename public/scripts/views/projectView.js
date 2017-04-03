'use strict';

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

  projectView.initIndexPage = () => {
    // eslint-disable-next-line
    Project.all.forEach(project => {
      $('#projects').append(project.toHtml('#projects-template'));
    })
  };

  // eslint-disable-next-line
  module.projectView = projectView;

}(window));
