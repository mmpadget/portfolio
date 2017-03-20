'use strict';

var articleView = {};

// For any child element, click "this"
articleView.handleMainNav = function () {
  $('.nav-links').on('click', '.tab', function() {

    // Show the content of that tab.
    $('.tab-content').hide();
    $('#'+ $(this).data('content')).fadeIn();
  });
  $('.nav-links .tab:first').click();
};

$(document).ready(function() {
  articleView.handleMainNav();
});
