const { Router } = require("express");

const { Versions } = require("../../config/versions.js");
const { UserControllerFactory } = require("./controller/user.controller.factory.js");
const validationMiddleware = require("./request_validations/user.request.validations.js");

const router = Router();

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Regular user and password based login
 *     tags:
 *      - User
 *     requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      identificationNumber:
 *                          type: number
 *                          example: 111111
 *                      name: 
 *                          type: string
 *                          example: Joe Doe
 *                      email:
 *                          type: string
 *                          example: test@test.com
 *                      cellphone:
 *                          type: string
 *                          example: 3194567890
 *                      password:
 *                          type: string
 *                          example: 12345
 *                      passwordConfirmation:
 *                          type: string
 *                          example: 12345
 * 
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
 *                              createdAt:
 *                                  type: string
 *                      token: 
 *                          type: string
 *       400: 
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties: 
 *                          error: 
 *                              type: string
 *                              example: INVALID_EMAIL
 */
router
    .post("/", validationMiddleware.createUserRequestValidations, (req, res) => UserControllerFactory.get(Versions.v1).create(req, res));

module.exports = { router }