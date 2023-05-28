const { PayMethodType } = require("./pay.method.type.entity.js");

const { AccountMovement } = require("../account_movement/account.movement.entity.js");
const { PocketMovement } = require("../pocket_movement/pocket.movement.entity.js");

function setAssociations() {
    PayMethodType.hasMany(AccountMovement);
    PayMethodType.hasMany(PocketMovement);
}

module.exports = { setAssociations }