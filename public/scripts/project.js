'use strict';

// TODO: Ensure your code passes ESLint.

// TODO: Peform a self-code-review, in GitHub, that includes comments (or issues) on the areas that you will be refactoring

// TODO: Your comments (or issues) should include high level technical details about how the related code should be refactored

// TODO: Use FP concepts and JS array methods to organize and/or manipulate your data

  // TODO: Eliminate all for loops.

  // TODO: Use of at least one .map() method. Use map where you are transforming one collection into another.

  // TODO: In at least one place, enclose the contents of a script file in an IIFE, that exports your high-level objects.

  // TODO: Refactor any parts of your app that could be more loosely coupled. Make smaller functions that can accept and expect the return values of other functions!

  // TODO: Use of at least one .reduce() method. Think of a useful way to use reduce. Maybe you want to put some "fun facts stats" in your footer?

// TODO: IIFE present on at least one .js file. Ensure that your JS modules are written in an OOP fashion and are wrapped in an IFFE in order to expose the module to the window

// TODO: Include a summary of your experience with your Canvas assignment submission.

// Constructor function.
function Project (opts) {
  this.title = opts.title;
  this.subTitle = opts.subTitle;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.publishedUrl = opts.publishedUrl;
  this.imageUrl = opts.imageUrl;
  this.caption = opts.caption;
}

// Track list of all projects directly on constructor.
Project.all = [];

// Set source of text from handlebars template.
Project.prototype.toHtml = function() {
  // Compile and render the handlebars template.
  // eslint-disable-next-line
  let template = Handlebars.compile($('#projects-template').text());
  return template(this);
};

// Use rawData to instantiate all projects.
Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

// Retrieve data (local/remote), process, hand to view.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    // If rawData is already in local storage, load all.
    Project.loadAll(JSON.parse(localStorage.rawData));
    // Render the index page.
    // eslint-disable-next-line
    projectView.initIndexPage();
  } else {
    // Load rawData in JSON file from the server.
    $.getJSON('/data/data.json', function(response) {
      // Cache in localStorage so we can skip next time.
      localStorage.setItem('rawData', JSON.stringify(response));
      // Load all data into project with load all.
      Project.loadAll(response);
      // Render the index page.
      // eslint-disable-next-line
      projectView.initIndexPage();
    })
  }
}
