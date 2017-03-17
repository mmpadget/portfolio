'use strict';

var articles = [];
var rawData; // Variable to stop "undefined" linter error.

// Constructor function: save all properties of 'opts' into 'this'.
function Article (opts) {
  this.title = opts.title;
  this.subTitle = opts.subTitle;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.publishedUrl = opts.publishedUrl;
  this.imageUrl = opts.imageUrl;
  this.caption = opts.caption;
}

// Clone template on HTML page.
Article.prototype.toHtml = function() {
  var $newArticle = $('article.project').clone();

  $newArticle.removeClass('project');

  // Edit each instance of copied template with unique data.
  $newArticle.find('h2').html(this.title);
  $newArticle.find('h3').html(this.subTitle);
  $newArticle.find('p.description').html(this.description);
  $newArticle.find('a.project-url').attr('href',this.projectUrl);
  $newArticle.find('a.published-url').attr('href',this.publishedUrl);

  return $newArticle;
};

// For all raw data, push into articles array.
rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(unicorn) {
  $('#projects-section').append(unicorn.toHtml());
});
