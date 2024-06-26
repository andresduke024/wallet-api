const { Sequelize } = require("sequelize");

function create(config) {
    return new Sequelize(config.db, config.username, config.password, {
        dialect: config.dialect,
        host: config.host,
        port: config.port,
        logging: config.logging === "true"
    });
}

module.exports = { 
    create
}