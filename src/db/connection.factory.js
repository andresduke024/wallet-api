const mysqlConnection = require("./mysql.connection");

function get(type, connectionConfig) {
    if (type == "mysql") {
        return mysqlConnection(connectionConfig)
    } else {
        throw new Error("Database connection manager not implemented");
    }
}

module.exports = { get }