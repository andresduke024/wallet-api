const jwtManager = require("./jwt.manager.js");

function init(authManager) {
    const create = (data) => authManager.create(data);
    const authenticate = (token) => authManager.authenticate(token);
    const tryGetToken = (req) => authManager.tryGetToken(req);

    return {
        create, 
        authenticate,
        tryGetToken
    }
}

module.exports = function() {
    const instance = init(jwtManager);

    return {
        create: instance.create, 
        authenticate: instance.authenticate,
        tryGetToken: instance.tryGetToken
    }
}