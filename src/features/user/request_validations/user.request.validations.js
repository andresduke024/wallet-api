const { body } = require("express-validator");
const validationMiddleware = require("../../../middlewares/request.validator.middleware.js");

const createUserRequestValidations = [
    body("identificationNumber", "Invalid identification number").exists().trim().notEmpty().isNumeric(),
    body("name", "Invalid name").exists().trim().notEmpty().isString(),
    body("email", "Invalid email").exists().trim().notEmpty().isEmail(),
    body("cellphone", "Invalid cellphone number").exists().trim().notEmpty().isMobilePhone(),
    body("password", "Invalid password").exists().trim().notEmpty().isString(),
    body("passwordConfirmation", "Invalid password confirmation").exists().trim().notEmpty().isString(),
    body("passwordConfirmation", "Passwords don't match").custom((value, { req }) => { return value === req.body.password }),
    validationMiddleware
]

module.exports = {
    createUserRequestValidations
}