const { AccountMovement } = require("./account.movement.entity.js");

const { Account } = require("../account/account.entity.js");
const { Place } = require("../place/place.entity.js");
const { PayMethodType } = require("../pay_method_type/pay.method.type.entity.js");
const { MovementSupport } = require("../movement_support/movement.support.entity.js");
const { MovementType } = require("../movement_type/movement.type.entity.js");

function setAssociations() {
    AccountMovement.belongsTo(Account);
    AccountMovement.belongsTo(Place);
    AccountMovement.belongsTo(MovementSupport);
    AccountMovement.belongsTo(PayMethodType);
    AccountMovement.belongsTo(MovementType);
}

module.exports = { setAssociations }