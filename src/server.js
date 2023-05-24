require("dotenv").config();

const https = require("https");
const { app } = require("./app.js");

const PORT = process.env.PORT;

const server = https.createServer(app);

server.listen(PORT, () => {
    console.info("Server listen on port: ", PORT)
});