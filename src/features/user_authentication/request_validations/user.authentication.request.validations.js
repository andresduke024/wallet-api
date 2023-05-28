const { body } = require("express-validator")
const validationMiddleware = require("../../../middlewares/request.validator.middleware.js");

const loginRequestValidations = [
    body("username", "Invalid username").exists().notEmpty().isString(),
    body("password", "Invalid password").exists().notEmpty().isString(),
    validationMiddleware
]

module.exports = {
    loginRequestValidations,
}