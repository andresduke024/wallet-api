const { UserAuthenticationService } = require("./user.authentication.service");
const { UserAuthenticationServiceV1 } = require("./user.authentication.service.v1");
const { MySQLUserAuthenticationRepository } = require("../repository/mysql.user.authentication.repository.js");
const { Validator } = require("../../../utils/validations/validator");
const { Versions } = require("../../../config/versions.js");

const { BCryptEncrypter } = require("../../../utils/encrypter/bcrypt.encrypter");
const { JWTAuthManager } = require("../../../auth/jwt.auth.manager.js");

class UserAuthenticationServiceFactory {
    /**
     * Build an UserAuthenticationService implementation based on version (throws)
     * @param {string} version
     * @returns { UserAuthenticationService } implementation
     */
    static get(version) {
        const repository = new MySQLUserAuthenticationRepository();
        const encrypter = new BCryptEncrypter();
        const authManager = new JWTAuthManager();
        const validator = new Validator();

        if(version !== Versions.v1) {
            throw new Error(`UserAuthenticationService ${version} not implemented`);
        }

        return new UserAuthenticationServiceV1(repository, encrypter, authManager, validator);
    }
}

module.exports = { UserAuthenticationServiceFactory }