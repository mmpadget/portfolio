'use strict';

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
    $.getJSON('/model/data.json', function(response) {
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
