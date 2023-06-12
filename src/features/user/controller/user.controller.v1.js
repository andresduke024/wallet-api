const { request, response } = require("express");

const { UserController } = require("./user.controller.js");
const { UserService } = require("../service/user.service.js");
const { UserMapper } = require("../mappers/user.mapper.js");

class UserControllerV1 extends UserController {

    /**
     * @constructor
     * @param {UserService} service 
     * @param {UserMapper} mapper
     */
    constructor(service, mapper) {
        super();
        this.service = service;
        this.mapper = mapper;
    }

    /**
     * @override
     * @param {request} req 
     * @param {response} res 
     * @returns {Promise<response>}
     */ 
    async create(req, res) {
        try {
            const user = await this.mapper.mapUser(req);
            const result = await this.service.create(user);

            return res.status(201).json({...result})
        } catch(error) {
            return this.catchError(res, error);
        }
    }
}

module.exports = { UserControllerV1 }