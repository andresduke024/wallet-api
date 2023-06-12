const { response } = require("express");
const { ApiError } = require("../utils/errors/api.error.js");

/**
 * A base REST Controller
 */
class Controller {
    /**
     * To map error, if it's the case, set the error data to response object and return it.
     * @param { response } res 
     * @param { Error } error 
     * @returns { response }
     */
    catchError(res, error) {
        if (error instanceof ApiError) {
            return res
                .status(error.statusCode)
                .json({ error: error.data });
        }
    
        return res.status(400).json({ error: error.message });
    }
}

module.exports = { Controller }