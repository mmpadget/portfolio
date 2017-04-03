'use strict';

(function(module) {

  const projectView = {};

  projectView.initIndexPage = () => {
    // eslint-disable-next-line
    Project.all.forEach(project => {
      $('#projects-section').append(project.toHtml('#projects-template'));
    })
  };

  // eslint-disable-next-line
  module.projectView = projectView;

}(window));
