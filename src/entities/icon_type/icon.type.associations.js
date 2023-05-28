const { IconType } = require("./icon.type.entity.js");

const { Account } = require("../account/account.entity.js");
const { Place } = require("../place/place.entity.js");
const { Pocket } = require("../pocket/pocket.entity.js");
const { Goal } = require("../goal/goal.entity.js");

function setAssociations() {
    IconType.hasMany(Account);
    IconType.hasMany(Place);
    IconType.hasMany(Pocket);
    IconType.hasMany(Goal);
}

module.exports = { setAssociations }