class UserAuthenticationService {
    /**
     * Validate if the data of request user object can be authenticated (throws)
     * @param {object}} user
     * @returns { Promise<{ user: {}, token: string }> }
     */
    async validateLogin(user) {
        return Promise.reject(new Error("UserAuthenticationService not implemented"))
    }
}

module.exports = { UserAuthenticationService }