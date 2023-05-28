const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js")

class Account extends Model {
    static start(sequelize){
        Account.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            value: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                default: 0
            },
            colorHex: {
                type: DataTypes.STRING(6),
                allowNull: false
            },
        }, {
            sequelize,
            timestamps: true,
            updatedAt: false,
            ...globalEntityConfig
        });
    }
}

module.exports = {
    Account
}