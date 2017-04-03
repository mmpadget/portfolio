'use strict';

(function(module) {

  // Object.keys iterates over child objects.
  function Project(opts) {
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  // All project objects stored in an array.
  Project.all = [];

  // Set source of text from handlebars template.
  Project.prototype.toHtml = function() {
    // Compile and render the handlebars template.
    // eslint-disable-next-line
    let template = Handlebars.compile($('#projects-template').text());

    $('#project-stats .total-projects').text(Project.all.length);
    $('#project-stats .words').text(Project.numWordsAll());

    return template(this);
  };

  // Map transforms one collection into another.
  Project.loadAll = rows => {
    Project.all = rows.map(function(ele) {
      return new Project(ele);
    })
  };

  // Reduce adds up the description words.
  Project.numWordsAll = () => {
    return Project.all.map(article => article.description.split(' ').length).reduce((acc, val) => acc + val);
  };

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
      $.getJSON('/data/projectData.json', function(response) {
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

  module.Project = Project;
}(window));
