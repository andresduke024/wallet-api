const { Response, Request } = require("express");
const { UserAuthenticationService } = require("../services/user.authentication.service.js");
const { UserAuthenticationMapper } = require("../mappers/user.authentication.mapper.js");
const { UserAuthenticationController } = require("./user.authentication.controller.js");

class UserAuthenticationControllerV1 extends UserAuthenticationController {
    /** 
     * Represents a UserAuthenticationController V1 implementation
     * @constructor
     * @param {UserAuthenticationService} service
     * @param {UserAuthenticationMapper} mapper
    */
    constructor(service, mapper) {
        super();
        this.service = service;
        this.mapper = mapper;
    }

    /**
     * @override
     * @param {Request} req 
     * @param {Response} res 
     */
    async login(req, res) {
        try {
            const user = await this.mapper.mapLoginRequestData(req);
            const result = await this.service.validateLogin(user);

            return res.status(200).json({...result});
        } catch (error) {
            return this.catchError(res, error);
        }   
    }
}

module.exports = { UserAuthenticationControllerV1 }