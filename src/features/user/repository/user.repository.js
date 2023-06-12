const { User } = require("../../../entities/user/user.entity.js");

class UserRepository {
    /**
     * To find a user by email
     * @param {{parameters: [{}], operator: string}} searchParameters 
     * @returns {Promise<User[]>}
     */
    async find(searchParameters) {
        throw new Error("UserRepository (find) not implemented");
    }

    /**
     * To persist a new user
     * @param {{identificationNumber, name, email, password, cellphone}} user 
     * @returns {Promise<User | null>}
     */
    async create(user) {
        throw new Error("UserRepository (create) not implemented");
    }
}

module.exports = { UserRepository }