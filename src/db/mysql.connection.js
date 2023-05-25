const { Sequelize } = require("sequelize");
const { port } = require("../config/global.config");

module.exports = function(config) {
    const sequelize = new Sequelize(config.db, config.username, config.password, {
        dialect: config.dialect,
        host: config.host,
        port: config.port
    })

    async function start() {
        try {
            await sequelize.authenticate();
            await sequelize.sync({alter: true});
        } catch (error) {
            console.error("Could not connect to mysql database ", error)
        }
    }

    return { start }
}