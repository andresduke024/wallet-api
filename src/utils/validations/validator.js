/**
 * A Common validations util class
 */
class Validator {
    /**
     * To validate if "something" it's an object
     * @param {any} object 
     * @returns {boolean}
     */
    isValidObject(object) {
        return object 
            && typeof object === "object" 
            && Object.keys(object).length !== 0
     }
}

module.exports = { Validator }