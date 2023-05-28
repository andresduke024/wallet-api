const { MovementType } = require("./movement.type.entity.js");

const { AccountMovement } = require("../account_movement/account.movement.entity.js");
const { PocketMovement } = require("../pocket_movement/pocket.movement.entity.js");
const { GoalMovement } = require("../goal_movement/goal.movement.entity.js");
const { Transfer } = require("../transfer/transfer.entity.js");

function setAssociations() {
    MovementType.hasMany(AccountMovement);
    MovementType.hasMany(PocketMovement);
    MovementType.hasMany(GoalMovement);
    MovementType.hasMany(Transfer);
}

module.exports = { setAssociations }