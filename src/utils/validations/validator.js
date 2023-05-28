class Validator {
    isValidObject(object) {
        console.log(typeof object)
        return object 
            && typeof object === "object" 
            && Object.keys(object).length !== 0
     }
}

module.exports = { Validator }