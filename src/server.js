// TODO: License
// TODO: Documentation.
'use strict' ;

const express = require('express');
const morgan = require('morgan');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const path  = require('path');

const API_KEY = process.env.API_KEY || '';
const PORT = process.env.PORT || '8000';
const BASE_URL = process.env.BASE_URL || '/api';

function startServer() {
  const app = express();

  // Redirect HTTP to HTTPS,
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

  // Settings
  app.set('port', PORT);
  app.set('json spaces', 2);

  // Middleware
  app.use(morgan('dev'));
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());

  // public resources
  app.use(express.static(path.join(__dirname + '/public')));
  app.use(`${BASE_URL}`, require('./routes/routes'));
  app.use(`${BASE_URL}/news`, require('./routes/news'));
  app.use(`${BASE_URL}/sources`, require('./routes/sources'));

  // starting server
  return app.listen(app.get('port'), () => {
    console.log(`Local DevServer started on port ${app.get('port')}`);
  });
}

startServer();
