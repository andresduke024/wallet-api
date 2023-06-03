const bcryptManager = require("./bcrypt.manager.js");

function create(encryptManager) {
    const encrypt = (data) => encryptManager.encrypt(data);
    const compare = (data, encryptedData) => encryptManager.compare(data, encryptedData);

    return {
        encrypt,
        compare
    }
}

module.exports = function(encryptManager){
    const encrypter = create(encryptManager || bcryptManager)

    return {
        ...encrypter
    }
}