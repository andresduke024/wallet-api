const jwtManager = require("./jwt.manager.js");

function init(authManager) {
    const createToken = (data) => authManager.create(data);
    const authenticate = (token) => authManager.authenticate(token);
    const tryGetToken = (req) => authManager.tryGetToken(req);

    return {
        createToken, 
        authenticate,
        tryGetToken
    }
}

module.exports = function(manager) {
    const instance = init(manager || jwtManager);

    return {
        createToken: instance.createToken, 
        authenticate: instance.authenticate,
        tryGetToken: instance.tryGetToken
    }
}