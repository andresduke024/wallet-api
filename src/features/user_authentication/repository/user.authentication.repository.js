const { User } = require("../../../entities/user/user.entity.js");

class UserAuthenticationRepository {
    async find(username) {
        return await User.findOne({
            attributes: { exclude: ["createdAt", "updatedAt"] },
            where: { email: username }
        });
    }
}

module.exports = { UserAuthenticationRepository }