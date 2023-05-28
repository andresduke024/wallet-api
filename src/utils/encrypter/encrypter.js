const bcryptManager = require("./bcrypt.manager.js");

function create(encryptManager) {
    const encrypt = (data) => encryptManager.encrypt(data);
    const compare = (data, encryptedData) => encryptManager.compare(data, encryptedData);

    return {
        encrypt,
        compare
    }
}

module.exports = function(){
    const encrypter = create(bcryptManager)

    return {
        ...encrypter
    }
}