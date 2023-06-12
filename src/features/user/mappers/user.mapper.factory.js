const { Versions } = require("../../../config/versions.js");
const { UserMapper } = require("./user.mapper.js");
const { UserMapperV1 } = require("./user.mapper.v1.js");
const { BCryptEncrypter } = require("../../../utils/encrypter/bcrypt.encrypter");

class UserMapperFactory {
    /**
     * Build an UserMapperFactory implementation based on version (throws)
     * @param {string} version
     * @returns {UserMapper} 
     */
    static get(version) {
        const encrypter = new BCryptEncrypter();

        if(version !== Versions.v1) {
            throw new Error(`UserMapperFactory ${version} not implemented`);
        }

        return new UserMapperV1(encrypter);
    }
}

module.exports = { UserMapperFactory }