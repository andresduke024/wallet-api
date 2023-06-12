const { Versions } = require("../../../config/versions.js");
const { UserController } = require("./user.controller.js");
const { UserControllerV1 } = require("./user.controller.v1.js");
const { UserServiceFactory } = require("../service/user.service.factory.js");
const { UserMapperFactory } = require("../mappers/user.mapper.factory.js");

class UserControllerFactory {
    /**
     * Build an UserController implementation based on version (throws)
     * @param {string} version 
     * @returns {UserController}
     */
    static get(version) {
        const service = UserServiceFactory.get(version);
        const mapper = UserMapperFactory.get(version);

        if (version !== Versions.v1) {
            throw new Error(`UserController ${version} not implemented`);
        } 

        return new UserControllerV1(service, mapper);
    }
}

module.exports = { UserControllerFactory }