const router = require("express").Router();

const validationMiddleware = require("./request_validations/user.authentication.request.validations.js");

const { UserAuthenticationRepository } = require("./repository/user.authentication.repository.js");
const { UserAuthenticationService } = require("./services/user.authentication.service.js");
const { UserAuthenticationMapper } = require("./mappers/user.authentication.mapper.js");
const { UserAuthenticationController } = require("./controller/user.authentication.controller.js");

const { Validator } = require("../../utils/validations/validator.js");

const encrypter = require("../../utils/encrypter/encrypter.js")();
const authenticator = require("../../auth/authenticator.js")();

const repository = new UserAuthenticationRepository(); 
const validator = new Validator();
const service = new UserAuthenticationService(repository, encrypter, authenticator, validator);
const mapper = new UserAuthenticationMapper();
const controller = new UserAuthenticationController(service, mapper)

router
    .post("/login", validationMiddleware.loginRequestValidations, (req, res) => controller.login(req, res))

module.exports = { router }