'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);