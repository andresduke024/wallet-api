const encrypter = require("bcryptjs");

async function encrypt(data) {
    return await encrypter.hash(data, 10);
}

async function compare(data, encryptedData) {
    return await encrypter.compare(data, encryptedData);
}

module.exports = {
    encrypt,
    compare
}