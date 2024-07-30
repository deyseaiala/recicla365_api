const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: "RECICLA 365 API",
      description: "Documentação da API RECICLA 365 usando Express e Sequelize",
      version: "1.0.0"
    },
    host: "localhost:3000",
    security: [{"apiKeyAuth": []}],
    securityDefinitions: {
      apiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Insira o token JWT"
      }
    }
};

const outputFile = './src/routes/doc.swagger.json';
const routes = ['./src/routes/routes.js'];

swaggerAutogen(outputFile, routes, doc);
