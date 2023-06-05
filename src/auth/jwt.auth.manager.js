const jwt = require("jsonwebtoken");
const { Request } = require("express");
const { AuthManager } = require("./auth.manager.js")
const { tokenSecretKey } = require("../config/global.config.js");

class JWTAuthManager extends AuthManager {
    /**
     * @override
     * @param {string} token 
     * @returns {object} data stored in token
     */
    authenticate(token) {
        try {
            const decodedData = jwt.verify(token, tokenSecretKey);
            return decodedData;
        } catch {
            throw new Error("Invalid token");
        }
    }
    
    /**
     * @override
     * @param {object} data 
     * @returns {string} token
     */
    createToken(data) {
        const token = jwt.sign(
            data, 
            tokenSecretKey,
            {
                expiresIn: "24h"
            }
        );
    
        return token;
    }
    
    /**
     * @override
     * @param {Request} req 
     * @returns {string} token
     */
    tryGetToken(req) {
        const token = req.headers["x-access-token"];
    
        if (!token) {
            throw new Error("Auth token required");
        }
    
        return token;
    }
}

module.exports = { JWTAuthManager }