'use strict';

var fs = require('fs');
var path = require('path');
var http = require('http');
var express = require('express');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var cors = require('cors');

var app = express();
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// Load the Swagger document
var swaggerDoc;
try {
  var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
  swaggerDoc = jsyaml.safeLoad(spec);
} catch (error) {
  console.error("Error loading Swagger YAML:", error);
  process.exit(1);
}

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  app.use(cors());
  app.use(express.json())

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Error handling middleware
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
