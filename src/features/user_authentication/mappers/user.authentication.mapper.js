class UserAuthenticationMapper {
    async mapLoginRequestData(req) {
        return {
            username: req.body.username,
            password: req.body.password
        }
    }
}

module.exports = { UserAuthenticationMapper }