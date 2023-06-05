const { Request } = require("express");

class AuthManager {
    /**
     * To know if a token is still valid as authentication key (throws)
     * @param {string} token 
     * @returns {object} data stored in token
     */
    authenticate(token) {
        throw new Error("AuthManager (authenticate) not implemented");
    }
    
    /**
     * Creates a new token base on data object
     * @param {object} data
     * @returns {string} token
     */
    createToken(data) {
        throw new Error("AuthManager (create) not implemented");
    }
    
    /**
     * Tries to get token from the request object (throws)
     * @param {Request} req 
     * @return {string} token
     */
    tryGetToken(req) {
        throw new Error("AuthManager (tryGetToken) not implemented");
    }
}


module.exports = { AuthManager }