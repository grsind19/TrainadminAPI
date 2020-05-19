const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

exports.init = function(app){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}