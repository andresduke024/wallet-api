const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js")

class User extends Model {
    static start(sequelize) {
        User.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            identificationNumber: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            cellphone: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            sequelize,
            ...globalEntityConfig
        })
    }
}

module.exports = {
    User
}