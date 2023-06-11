const { UserAuthenticationMapper } = require("./user.authentication.mapper");
const { UserAuthenticationMapperV1 } = require("./user.authentication.mapper.v1");
const { Versions } = require("../../../config/versions.js")

class UserAuthenticationMapperFactory {
    /**
     * Build an UserAuthenticationMapper implementation based on version (throws)
     * @param {string} version
     * @returns { UserAuthenticationMapper } implementation
     */
    static get(version) {
        if(version !== Versions.v1) {
            throw new Error(`UserAuthenticationMapper ${version} not implemented`);
        }
       
        return new UserAuthenticationMapperV1();
    }
}

module.exports = { UserAuthenticationMapperFactory }