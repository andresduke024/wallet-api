const encrypter = require("bcryptjs");
const { Encrypter } = require("./encrypter.js")

class BCryptEncrypter extends Encrypter {
    /**
     * @override
     * @param {string} data 
     */
    async encrypt(data) {
        return await encrypter.hash(data, 10);
    }
    
    /**
     * @override
     * @param {string} data 
     * @param {string} encryptedData 
     */
    async compare(data, encryptedData) {
        return await encrypter.compare(data, encryptedData);
    }    
}

module.exports = { BCryptEncrypter }