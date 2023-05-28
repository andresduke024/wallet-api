const { dbConnection } = require("../config/global.config");
const connectionFactory = require("./connection.factory.js");

// Entities
const { Account } = require("../entities/account/account.entity.js");
const { AccountMovement } = require("../entities/account_movement/account.movement.entity.js");

const { Goal } = require("../entities/goal/goal.entity.js");
const { GoalMovement } = require("../entities/goal_movement/goal.movement.entity.js");

const { IconType } = require("../entities/icon_type/icon.type.entity.js");

const { MovementSupport } = require("../entities/movement_support/movement.support.entity.js");
const { MovementType } = require("../entities/movement_type/movement.type.entity.js");

const { PayMethodType } = require("../entities/pay_method_type/pay.method.type.entity.js");

const { Place } = require("../entities/place/place.entity.js");

const { Pocket } = require("../entities/pocket/pocket.entity.js");
const { PocketMovement } = require("../entities/pocket_movement/pocket.movement.entity.js");

const { User } = require("../entities/user/user.entity.js");

const { Transfer } = require("../entities/transfer/transfer.entity.js");


// Associations
const accountAssociations = require("../entities/account/account.associations.js");
const accountMovementAssociations = require("../entities/account_movement/account.movement.associations.js");

const goalAssociations = require("../entities/goal/goal.associations.js");
const goalMovementAssociations = require("../entities/goal_movement/goal.movement.associations.js");

const iconTypeAssociations = require("../entities/icon_type/icon.type.associations.js");

const movementSupportAssociations = require("../entities/movement_support/movement.support.associations.js");
const movementTypeAssociations = require("../entities/movement_type/movement.type.associations.js");

const payMethodTypeAssociations = require("../entities/pay_method_type/pay.method.type.entity.associations.js");

const placeAssociations = require("../entities/place/place.associations.js");

const pocketAssociations = require("../entities/pocket/pocket.associations.js");
const pocketMovementAssociations = require("../entities/pocket_movement/pocket.movement.associations.js");

const userAssociations = require("../entities/user/user.associations.js");

const transferAssociations = require("../entities/transfer/transfer.associations.js");

async function start() {
    try {
        const sequelize = connectionFactory.create(dbConnection);
        registerEntities(sequelize);
        registerAssociations();
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error("Could not start db connection ", error)
    }
}

function registerEntities(sequelize) {
    const entities = [
        Account,
        AccountMovement,
        Goal,
        GoalMovement,
        IconType,
        MovementSupport,
        MovementType,
        PayMethodType,
        Place,
        Pocket,
        PocketMovement,
        User,
        Transfer
    ]

    entities.forEach(entity => entity.start(sequelize));
}

function registerAssociations() {
    const associations = [
        accountAssociations,
        accountMovementAssociations,
        goalAssociations,
        goalMovementAssociations,
        iconTypeAssociations,
        movementSupportAssociations,
        movementTypeAssociations,
        payMethodTypeAssociations,
        placeAssociations,
        pocketAssociations,
        pocketMovementAssociations,
        userAssociations,
        transferAssociations
    ];

    associations.forEach(item => item.setAssociations());
}

module.exports = { start }