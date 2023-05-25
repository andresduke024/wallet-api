require("dotenv").config();

const https = require("https");
const { app } = require("./app.js");
const { port } = require("./config/global.config.js");
const dbConnectionManager = require("./db/connection.manager.js");

const server = https.createServer(app);

async function startSever() {
    await dbConnectionManager.start();

    server.listen(port, () => {
        console.info("Server listen on port: ", port)
    });
}

startSever();