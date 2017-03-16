'use strict';

var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.subtitle = opts.subtitle;
  this.description = opts.description;
  this.projectUrl = opts.projectUrl;
  this.publishedUrl = opts.publishedUrl;
  this.imageUrl = opts.imageUrl;
  this.caption = opts.caption;
}
