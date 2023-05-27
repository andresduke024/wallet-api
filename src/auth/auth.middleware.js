const AuthManager = require("./authenticator.js");

module.exports = function(req, res, next) {
    try {
        const authManager = AuthManager();
        
        const token = authManager.tryGetToken(req);
        const authData = authManager.authenticate(token);

        req.authData = authData;
    } catch(error) {
        return res
            .status(401)
            .send(error.message);
    }

    return next();
}