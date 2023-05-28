const { Pocket } = require("./pocket.entity.js");

const { Account } = require("../account/account.entity.js");
const { IconType } = require("../icon_type/icon.type.entity.js");
const { PocketMovement } = require("../pocket_movement/pocket.movement.entity.js");

function setAssociations() {
    Pocket.belongsTo(Account);
    Pocket.belongsTo(IconType);
    Pocket.hasMany(PocketMovement);
}

module.exports = { setAssociations }