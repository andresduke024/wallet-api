const { Place } = require("./place.entity.js");

const { User } = require("../user/user.entity.js");
const { IconType } = require("../icon_type/icon.type.entity.js");
const { PocketMovement } = require("../pocket_movement/pocket.movement.entity.js");
const { AccountMovement } = require("../account_movement/account.movement.entity.js");

function setAssociations() {
    Place.belongsTo(User);
    Place.belongsTo(IconType);
    Place.hasMany(PocketMovement);
    Place.hasMany(AccountMovement);
} 

module.exports = { setAssociations }