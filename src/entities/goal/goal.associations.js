const { Goal } = require("./goal.entity.js");

const { User } = require("../user/user.entity.js");
const { IconType } = require("../icon_type/icon.type.entity.js");
const { GoalMovement } = require("../goal_movement/goal.movement.entity.js");

function setAssociations() {
    Goal.belongsTo(User);
    Goal.belongsTo(IconType);
    Goal.hasMany(GoalMovement);
}

module.exports = { setAssociations }