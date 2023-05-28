const jwt = require("jsonwebtoken");

const { tokenSecretKey } = require("../config/global.config.js");

function authenticate(token) {
    try {
        const decodedData = jwt.verify(token, tokenSecretKey);
        return decodedData;
    } catch {
        throw new Error("Invalid token");
    }
}

function create(data) {
    const token = jwt.sign(
        data, 
        tokenSecretKey,
        {
            expiresIn: "24h"
        }
    );

    return token;
}

function tryGetToken(req) {
    const token = req.headers["x-access-token"];

    if (!token) {
        throw new Error("Auth token required");
    }

    return token;
}

module.exports = {
    authenticate,
    create,
    tryGetToken
}