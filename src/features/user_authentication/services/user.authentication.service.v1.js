const { ApiError } = require("../../../utils/errors/api.error.js");
const { UserAuthenticationErrors } = require("../errors/user.authentication.errors.js");
const { UserAuthenticationRepository } = require("../repository/user.authentication.repository.js");
const { UserAuthenticationService } = require("./user.authentication.service.js");
const { Encrypter } = require("../../../utils/encrypter/encrypter.js");
const { AuthManager } = require("../../../auth/auth.manager.js");
const { Validator } = require("../../../utils/validations/validator.js");

class UserAuthenticationServiceV1 extends UserAuthenticationService {
    /**
     * Represents an user authentication service
     * @constructor
     * @param {UserAuthenticationRepository} repository 
     * @param {Encrypter} encrypter 
     * @param {AuthManager} authManager 
     * @param {Validator} validator 
     */
    constructor(repository, encrypter, authManager, validator){
        super();
        this.repository = repository;
        this.encrypter = encrypter;
        this.authManager = authManager;
        this.validator = validator;
    }

    /**
     * @override
     * @param {{username: string, password: string}} user 
     * @returns {Promise<{user: {}, token: string}>}
     */
    async validateLogin(user) {
        const result = await this.repository.find(user.username);

        if(!this.validator.isValidObject(result)) {
            throw new ApiError(401, UserAuthenticationErrors.USER_NOT_FOUND);
        }

        const isRightPassword = await this.encrypter.compare(user.password, result.password);

        if(!isRightPassword) {
            throw new ApiError(401, UserAuthenticationErrors.INVALID_CREDENTIALS);
        }

        const token = this.authManager.createToken({username: result.email})
        const { password, ...data } = result.toJSON();

        return {
            user: data,
            token
        }
    }
}

module.exports = { UserAuthenticationServiceV1 }