const { Model, DataTypes } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js")

class Pocket extends Model {
    static start(sequelize) {
        Pocket.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            value: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(25),
                allowNull: false
            },
            colorHex: {
                type: DataTypes.STRING(6),
                allowNull: false
            }
        }, {
            sequelize,
            ...globalEntityConfig
        })
    }
}

module.exports = {
    Pocket
}