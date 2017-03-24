'use strict';

// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('/about', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('your app is being served on localhost:3000');
})

// eslint-disable-next-line
app.use(function(request, response, next) {
  response.status(404).sendFile('404.html', { root:'./public'})
})
