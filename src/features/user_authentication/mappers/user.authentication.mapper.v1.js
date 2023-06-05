const { Request } = require("express");
const { UserAuthenticationMapper } = require("./user.authentication.mapper.js")

class UserAuthenticationMapperV1 extends UserAuthenticationMapper {
    /**
     * @override
     * @param { Request } req 
     * @returns {Promise<{username: string, password: string}>}
     */
    async mapLoginRequestData(req) {
        return {
            username: req.body.username,
            password: req.body.password
        }
    }
}

module.exports = { UserAuthenticationMapperV1 }