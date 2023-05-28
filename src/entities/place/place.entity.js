const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js");

class Place extends Model {
    static start(sequelize) {
        Place.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            latitude: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            longitude: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            updatedAt: false,
            ...globalEntityConfig
        })
    }
}

module.exports = { Place }