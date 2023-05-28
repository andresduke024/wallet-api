const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config");

class MovementSupport extends Model {
    static start(sequelize) {
        MovementSupport.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            supportImageURL: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            ...globalEntityConfig
        })
    }
}

module.exports = { MovementSupport }