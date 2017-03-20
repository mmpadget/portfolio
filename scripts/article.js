'use strict';

var allArticles = [];

function Article (opts) {
  this.title = opts.title;
  this.subTitle = opts.subTitle;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.publishedUrl = opts.publishedUrl;
  this.imageUrl = opts.imageUrl;
  this.caption = opts.caption;
}

Article.prototype.toHtml = function() {

  var source = $('#articles-template').html();
  // eslint-disable-next-line
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

// eslint-disable-next-line
rawData.forEach(function(articleObject) {
  allArticles.push(new Article(articleObject));
});

allArticles.forEach(function(unicorn) {
  $('#articles').append(unicorn.toHtml());
});

$('article.template').hide();
