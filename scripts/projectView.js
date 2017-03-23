'use strict';

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
