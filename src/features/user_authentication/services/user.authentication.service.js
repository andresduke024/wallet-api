const { ApiError } = require("../../../utils/errors/api.error.js");
const { UserAuthenticationErrors } = require("../errors/user.authentication.errors.js");

class UserAuthenticationService {
    constructor(repository, encrypter, authenticator, validator){
        this.repository = repository;
        this.encrypter = encrypter;
        this.authenticator = authenticator;
        this.validator = validator;
    }

    async validateLogin(user) {
        const result = await this.repository.find(user.username);

        if(!this.validator.isValidObject(result)) {
            throw new ApiError(401, UserAuthenticationErrors.USER_NOT_FOUND);
        }

        const isRightPassword = await this.encrypter.compare(user.password, result.password);

        if(!isRightPassword) {
            throw new ApiError(401, UserAuthenticationErrors.INVALID_CREDENTIALS);
        }

        const token = this.authenticator.createToken({username: result.email})
        const { password, ...data } = result.toJSON();

        return {
            user: data,
            token
        }
    }
}

module.exports = { UserAuthenticationService }