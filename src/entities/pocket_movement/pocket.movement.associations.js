const { PocketMovement } = require("./pocket.movement.entity.js");

const { Pocket } = require("../pocket/pocket.entity.js");
const { Place } = require("../place/place.entity.js");
const { PayMethodType } = require("../pay_method_type/pay.method.type.entity.js");
const { MovementSupport } = require("../movement_support/movement.support.entity.js");
const { MovementType } = require("../movement_type/movement.type.entity.js");

function setAssociations() {
    PocketMovement.belongsTo(Pocket);
    PocketMovement.belongsTo(Place);
    PocketMovement.belongsTo(MovementSupport);
    PocketMovement.belongsTo(PayMethodType);
    PocketMovement.belongsTo(MovementType);
}

module.exports = { setAssociations }