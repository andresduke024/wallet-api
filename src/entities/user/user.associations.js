const { User } = require("./user.entity.js");

const { Account } = require("../account/account.entity.js");
const { Place } = require("../place/place.entity.js");
const { Goal } = require("../goal/goal.entity.js");
const { Transfer } = require("../transfer/transfer.entity.js");

function setAssociations() {
    User.hasMany(Account);
    User.hasMany(Place);
    User.hasMany(Goal);
    User.hasMany(Transfer);
} 

module.exports = { setAssociations }