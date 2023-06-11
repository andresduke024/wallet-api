const { Request } = require("express");
class UserAuthenticationMapper {
    /**
     * Take the user data from the request object and then map each one to a new object
     * @param { Request } req 
     * @returns { Promise }
     */
    async mapLoginRequestData(req) {
        return Promise.reject(new Error("UserAuthenticationMapper Not implemented"));
    }
}

module.exports = { UserAuthenticationMapper }