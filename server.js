'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('Your app is being served on ' + PORT);
})

// eslint-disable-next-line
app.use(function(request, response, next) {
  response.status(404).sendFile('404.html', { root:'./public'})
})
