const { UserService } = require("./user.service.js");
const { UserRepository } = require("../repository/user.repository.js");
const { AuthManager } = require("../../../auth/auth.manager.js");
const { Validator } = require("../../../utils/validations/validator.js");
const { Operators } = require("../../../db/helpers/operators.js");
const { ApiError } = require("../../../utils/errors/api.error.js");
const { UserErrors } = require("../errors/user.errors.js");

class UserServiceV1 extends UserService {

    /**
     * Represents an user service
     * @constructor
     * @param {UserRepository} repository 
     * @param {AuthManager} authManager 
     * @param {Validator} validator 
     */
    constructor(repository, authManager, validator){
        super();
        this.repository = repository;
        this.authManager = authManager;
        this.validator = validator;
    }

    /**
     * To create a new user and an authentication token
     * @override
     * @param {{identificationNumber, name, email, password, cellphone}} user 
     * @returns {Promise<{user: {}, token: string}>}
     */
    async create(user) {
        let searchResult = await this.repository.find({
            parameters: [
                { email: user.email }, 
                { identificationNumber:  user.identificationNumber }
            ], 
            operator: Operators.OR
        });

        if(searchResult.length > 0) {
            const error = searchResult.some(item => item.email == user.email) 
                ? UserErrors.EMAIL_NOT_AVAILABLE 
                : UserErrors.IDENTIFICATION_NUMBER_NOT_AVAILABLE;

            throw new ApiError(400, error);
        }

        const result = await this.repository.create(user);

        if(!this.validator.isValidObject(result)) {
            throw new ApiError(400, UserErrors.INVALID_USER_DATA);
        }

        const token = this.authManager.createToken({email: user.email, id: user.identificationNumber});

        const { ...data } = result;

        return { user: data, token };
    }
}

module.exports = { UserServiceV1 }