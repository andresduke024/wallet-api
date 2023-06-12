const { Versions } = require("../../../config/versions.js");

const { UserService } = require("./user.service.js");
const { UserServiceV1 } = require("./user.service.v1.js");
const { MySQLUserRepository } = require("../repository/mysql.user.repository.js");
const { Validator } = require("../../../utils/validations/validator");

const { JWTAuthManager } = require("../../../auth/jwt.auth.manager.js");

class UserServiceFactory {

    /**
     * Build an UserService implementation based on version (throws)
     * @param {string} version
     * @returns {UserService}
     */
    static get(version) {
        const repository = new MySQLUserRepository();
        const authManager = new JWTAuthManager();
        const validator = new Validator();

        if(version !== Versions.v1) {
            throw new Error(`UserService ${version} not implemented`);
        }

        return new UserServiceV1(repository, authManager, validator);
    }
}

module.exports = { UserServiceFactory }