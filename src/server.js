require("dotenv").config();

const https = require("http");
const app = require("./app.js");
const { port } = require("./config/global.config.js");

const swaggerManager = require("./swagger/swagger.manager.js")
const dbConnectionManager = require("./db/connection.manager.js");

const server = https.createServer(app);

async function startSever() {
    swaggerManager.setup(app, port);

    await dbConnectionManager.start();

    server.listen(port, () => {
        console.info("Server listen on port: ", port)
    });
}

startSever();