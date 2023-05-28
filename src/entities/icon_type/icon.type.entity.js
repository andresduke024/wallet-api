const { DataTypes, Model } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js")

class IconType extends Model {
    static start(sequelize) {
        IconType.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
            sequelize, 
            timestamps: false,
            ...globalEntityConfig
        })
    }
}

module.exports = {
    IconType
}