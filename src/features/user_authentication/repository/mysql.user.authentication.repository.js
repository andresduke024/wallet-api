const { User } = require("../../../entities/user/user.entity.js");
const { UserAuthenticationRepository } = require("./user.authentication.repository.js");

class MySQLUserAuthenticationRepository extends UserAuthenticationRepository {
    /**
     * @override
     * @param {string} username 
     */
    async find(username) {
        return await User.findOne({
            attributes: { exclude: ["createdAt", "updatedAt"] },
            where: { email: username }
        });
    }
}

module.exports = { MySQLUserAuthenticationRepository }