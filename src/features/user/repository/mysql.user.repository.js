const { UserRepository } = require("./user.repository.js");
const { User } = require("../../../entities/user/user.entity.js");

const { Op } = require("sequelize");

class MySQLUserRepository extends UserRepository {
    /**
     * @override
     * @param {{parameters: [{}], operator: string}} searchParameters 
     * @returns {Promise<User[]>}
     */
    async find(searchParameters) {
        return await User.findAll({
            where: {
                [Op[searchParameters.operator]]: searchParameters.parameters
            }
        });
    }

    /**
     * @override
     * @param {{identificationNumber, name, email, password, cellphone}} user 
     * @returns {Promise<User | null>}
     */
    async create(user) {
        const data = await User.create({
            ...user
        });

        return data.toJSON();
    }
}

module.exports = { MySQLUserRepository }