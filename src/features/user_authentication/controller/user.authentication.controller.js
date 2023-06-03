const { Controller } = require("../../../common/controller.js");

class UserAuthenticationController extends Controller {
    constructor(service, mapper) {
        super();
        this.service = service;
        this.mapper = mapper;
    }

    async login(req, res) {
        try {
            const user = await this.mapper.mapLoginRequestData(req);
            const result = await this.service.validateLogin(user);

            res.status(200).json({...result});
        } catch (error) {
            this.catchError(res, error);
        }
        
    }
}

module.exports = { UserAuthenticationController }