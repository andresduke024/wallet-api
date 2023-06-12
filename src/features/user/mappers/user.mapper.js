const { request } = require("express");

class UserMapper {
    /**
     * Take the user data from the request object and then map each one to a new object
     * @param {request} req 
     * @returns {{}}
     */
    async mapUser(req) {
        throw new Error("UserMapper (mapUser) not implemented");
    }
}

module.exports = { UserMapper }