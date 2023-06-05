class Encrypter {
    /**
     * To encrypt a string 
     * @param {string} data 
     * @returns {Promise<string>}
     */
    async encrypt(data) {
        return Promise.reject(new Error("Encrypter (encrypt) not implemented"))
    }
    
    /**
     * To compare if a regular string is equivalent to a encrypted string
     * @param {string} data 
     * @param {string} encryptedData 
     * @returns {Promise<boolean>}
     */
    async compare(data, encryptedData) {
        return Promise.reject(new Error("Encrypter (compare) not implemented"));
    }   
}

module.exports = { Encrypter }