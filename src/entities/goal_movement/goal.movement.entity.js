const { Model, DataTypes } = require("sequelize");

const globalEntityConfig = require("../config/entity.config.js");

class GoalMovement extends Model {
    static start(sequelize) {
        GoalMovement.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            value: {
                type: DataTypes.DECIMAL, 
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            updatedAt: false,
            ...globalEntityConfig
        })
    }
}

module.exports = { GoalMovement }