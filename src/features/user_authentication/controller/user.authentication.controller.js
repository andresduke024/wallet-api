const { response, request } = require("express");
const { Controller } = require("../../../common/controller");
class UserAuthenticationController extends Controller {
    /**
     * Async function that tries to login with username and password
     * @param { request } req 
     * @param { response } res 
     * @returns { Promise<response> }
     */
    async login(req, res) {
       return Promise.reject(new Error("UserAuthenticationController not implemented"));
    }
}

module.exports = { UserAuthenticationController }