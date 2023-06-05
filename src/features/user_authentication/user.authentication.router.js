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

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Regular user and password based login
 *     tags:
 *      - Auth
 *     requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: test@tests.com
 *                      password: 
 *                          type: string
 *                          example: 12345
 *     responses:
 *       200:
 *         description: Retrieve the user's data and an auth token.
 *         content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      user: 
 *                          type: object
 *                          properties: 
 *                              id:
 *                                  type: integer
 *                              identificationNumber:
 *                                  type: string
 *                              name:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              cellphone:
 *                                  type: string
 *                      token: 
 *                          type: string
 *       401: 
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties: 
 *                          error: 
 *                              type: string
 *                              example: INVALID_CREDENTIALS
 *       400:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          errors: 
 *                              type: array
 *                              description: List of request body errors
 *                              example: [ Invalid username ]
 *                              
 *         
 */
router
    .post("/login", validationMiddleware.loginRequestValidations, (req, res) => controller.login(req, res))

module.exports = { router }