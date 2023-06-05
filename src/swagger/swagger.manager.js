const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Wallet Express API with Swagger",
            description: "A personal wallet and finances manager RESTful API",
            version: "1.0.0",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html"
            }
        }
    },
    apis: [
        "./src/features/user_authentication/user.authentication.router.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

const setup = (app, port) => {
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    console.log(`Docs are available at http://localhost:${port}/api/docs`);
}

module.exports = {
    setup
}