'use strict';

// Constructor function.
function Article (opts) {
  this.title = opts.title;
  this.subTitle = opts.subTitle;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.publishedUrl = opts.publishedUrl;
  this.imageUrl = opts.imageUrl;
  this.caption = opts.caption;
}

// Track list of all articles directly on constructor.
Article.all = [];

// Set source of text from handlebars template.
Article.prototype.toHtml = function() {
  // Compile and render the handlebars template.
  // eslint-disable-next-line
  let template = Handlebars.compile($('#articles-template').text());
  // eslint-disable-next-line
  return template(this);
};

// Use rawData to instantiate all articles.
Article.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}

// Retrieve data (local/remote), process, hand to view.
Article.fetchAll = function() {
  if (localStorage.rawData) {
    // If rawData is already in local storage, load all.
    Article.loadAll(JSON.parse(localStorage.rawData));
    // Render the index page.
    // eslint-disable-next-line
    articleView.initIndexPage();
  } else {
    // Load rawData in JSON file from the server.
    $.getJSON('/data/projectData.json', function(response) {
      // Cache in localStorage so we can skip next time.
      localStorage.setItem('rawData', JSON.stringify(response));
      // Load all data into article all with load all.
      Article.loadAll(response);
      // Render the index page.
      // eslint-disable-next-line
      articleView.initIndexPage();
    })
  }
}
