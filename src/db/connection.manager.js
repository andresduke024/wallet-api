const { dbConnection } = require("../config/global.config");
const connectionFactory = require("./connection.factory.js");

async function start() {
    try {
        const connectionManager = connectionFactory.get(dbConnection.dialect, dbConnection);
        await connectionManager.start()
    } catch (error) {
        console.error("Could not start db connection ", error)
    }
}

module.exports = { start }