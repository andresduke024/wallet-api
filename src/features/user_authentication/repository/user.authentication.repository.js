class UserAuthenticationRepository {
    /**
     * Retrieve the persisted user
     * @param {string} username 
     * @returns {Promise<User>}
     */
    async find(username) { 
        return Promise.reject(new Error("Not implemented"));
    }
}

module.exports = { UserAuthenticationRepository }