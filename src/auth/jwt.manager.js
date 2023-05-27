const jwt = require("jsonwebtoken");

const TOKEN_KEY = process.env.TOKEN_KEY;

function authenticate(token) {
    try {
        const decodedData = jwt.verify(token, TOKEN_KEY);
        return decodedData;
    } catch {
        throw new Error("Invalid token");
    }
}

function create(data) {
    const token = jwt.sign(
        data, 
        TOKEN_KEY,
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