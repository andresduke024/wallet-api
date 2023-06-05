const { UserAuthenticationMapperFactory } = require("../mappers/user.authentication.mapper.factory");
const { UserAuthenticationServiceFactory } = require("../services/user.authentication.service.factory");
const { UserAuthenticationController } = require("./user.authentication.controller");
const { UserAuthenticationControllerV1 } = require("./user.authentication.controller.v1");
const { Versions } = require("../../../config/versions.js")

class UserAuthenticationControllerFactory {
    /**
     * Build an UserAuthenticationController implementation based on version (throws)
     * @param {string} version
     * @returns { UserAuthenticationController } implementation
     */
    static get(version) {
        const service = UserAuthenticationServiceFactory.get(version);    
        const mapper = UserAuthenticationMapperFactory.get(version);

        if(version !== Versions.v1) {
            throw new Error(`UserAuthenticationController ${version} not implemented`);
        }
       
        return new UserAuthenticationControllerV1(service, mapper);    
    }
}

module.exports = { UserAuthenticationControllerFactory }