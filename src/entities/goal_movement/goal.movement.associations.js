const { GoalMovement } = require("./goal.movement.entity.js");

const { Goal } = require("../goal/goal.entity.js");
const { MovementType } = require("../movement_type/movement.type.entity.js");
const { Account } = require("../account/account.entity.js");

function setAssociations() {
    GoalMovement.belongsTo(Goal);
    GoalMovement.belongsTo(MovementType);
    GoalMovement.belongsTo(Account);
}

module.exports = { setAssociations }