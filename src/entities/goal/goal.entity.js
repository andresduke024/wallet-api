const { Model, DataTypes } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js");

class Goal extends Model {
    static start(sequelize) {
        Goal.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            targetValue: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            currentValue: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            startDate: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            endDate: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        }, {
            sequelize,
            ...globalEntityConfig
        })
    }
}

module.exports = { Goal }