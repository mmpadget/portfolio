'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.listen(PORT, function() {
  console.log('Your app is being served on ' + PORT);
})

// eslint-disable-next-line
app.use(function(request, response, next) {
  response.status(404).sendFile('404.html', { root:'./public'})
})
