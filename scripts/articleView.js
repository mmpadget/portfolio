'use strict';

var articleView = {};

// For any child element, click "this"
articleView.handleMainNav = function () {
  $('.nav-links').on('click', '.tab', function() {
    // TODO:
    //   1. Hide all of the .tab-content sections
    //   2. Fade in the single .tab-content section that is
    //     associated with the .tab element's data-content attribute.

    // Show the content of that tab.
    $('.tab-content').hide(); // Hide all.
    $('#'+ $(this).data('content')).fadeIn(); // Another Concatenation.
  });
  $('.nav-links .tab:first').click();
};

$(document).ready(function() {
  articleView.handleMainNav();
});
