const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js");

class Transfer extends Model {
    static start(sequelize) {
        Transfer.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            value: {
                type: DataTypes.DECIMAL,
                allowNull: false
            }
        },{
            sequelize,
            ...globalEntityConfig
        })
    }
}

module.exports = { Transfer }