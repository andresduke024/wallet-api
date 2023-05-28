const { Account } = require("./account.entity.js");

const { User } = require("../user/user.entity.js");
const { IconType } = require("../icon_type/icon.type.entity.js");
const { AccountMovement } = require("../account_movement/account.movement.entity.js");
const { Pocket } = require("../pocket/pocket.entity.js");
const { Goal } = require("../goal/goal.entity.js");

function setAssociations() {
    Account.belongsTo(User);
    Account.belongsTo(IconType);
    Account.hasMany(AccountMovement);
    Account.hasMany(Pocket);
    Account.hasMany(Goal);
}

module.exports = { setAssociations }