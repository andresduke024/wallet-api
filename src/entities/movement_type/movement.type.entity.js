const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js")

class MovementType extends Model {
    static start(sequelize) {
        MovementType.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            ...globalEntityConfig
        })
    }
}

module.exports = {
    MovementType
}