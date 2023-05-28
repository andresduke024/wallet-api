const { Account } = require("../account/account.entity");

const { User } = require("../user/user.entity");
const { Transfer } = require("./transfer.entity.js");
const { MovementType } = require("../movement_type/movement.type.entity");

function setAssociations() {
    Transfer.belongsTo(Account, {
        foreignKey: "target_account_id"
    })
    Transfer.belongsTo(Account, {
        foreignKey: "origin_account_id"
    })
    Transfer.belongsTo(User);
    Transfer.belongsTo(MovementType);
}

module.exports = { setAssociations }