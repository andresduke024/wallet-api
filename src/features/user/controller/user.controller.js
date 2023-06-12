const { request, response } = require("express");

const { Controller } = require("../../../common/controller.js");

class UserController extends Controller {
    /** 
     * To create a new user
     * @param {request} req 
     * @param {response} res 
     * @returns {Promise<response>}
     */
    async create(req, res) {
        throw new Error(`UserController (create) not implemented`);
    };
}

module.exports = { UserController }