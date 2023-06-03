const { ApiError } = require("../utils/errors/api.error.js");

class Controller {
    catchError(res, error) {
        if (error instanceof ApiError) {
            return res
                .status(error.statusCode)
                .json({ error: error.data });
        }
    
        return res
            .status(400)
            .json({ error: error.message });
    }
}

module.exports = { Controller }