const { validationResult } = require("express-validator");

module.exports = function(req, res, next) {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        const errorsDescriptions = error.array().map(item => item.msg);
        const errors = [...new Set(errorsDescriptions)];

        return res
            .status(400)
            .json({ errors });
    }
}