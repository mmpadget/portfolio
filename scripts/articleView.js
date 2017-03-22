'use strict';

const articleView = {};

// For any child element, click "this"
articleView.handleMainNav = function () {
  $('.nav-links').on('click', '.tab', function() {
    // Show the content of that tab.
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });
  $('.nav-links .tab:first').click();
};

articleView.initIndexPage = function() {
  // eslint-disable-next-line
  console.log($('#articles').length);
  Article.all.forEach(function(a) {
    $('#articles').append(a.toHtml())
  });

  articleView.handleMainNav();
};
