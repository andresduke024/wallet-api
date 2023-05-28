module.exports = {
    port: process.env.port,
    dbConnection: {
        db: process.env.dbName,
        username: process.env.dbUsername,
        password: process.env.dbPassword,
        dialect: process.env.dbDialect,
        host: process.env.dbHost,
        port: process.env.dbHostPort
    },
    tokenSecretKey: process.env.tokenSecretKey
}