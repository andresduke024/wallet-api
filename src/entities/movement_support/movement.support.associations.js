const { MovementSupport } = require("./movement.support.entity.js");

const { AccountMovement } = require("../account_movement/account.movement.entity.js");
const { PocketMovement } = require("../pocket_movement/pocket.movement.entity.js");

function setAssociations() {
    MovementSupport.hasOne(AccountMovement);
    MovementSupport.hasOne(PocketMovement);
}

module.exports = { setAssociations }