const { model } = require("mongoose");

const HeroSchema = require('./schema/hero');
const ItemSchema = require('./schema/item');
const ComboSchema = require('./schema/combo');
const TeamSchema = require('./schema/team');
const RoonSchema = require('./schema/roon');
const LatenSchema = require('./schema/laten');
const ChallengerSchema = require('./schema/challenger');
const TierSchema = require('./schema/tierlist');

exports.HeroModel = model("Hero", HeroSchema);
exports.ItemModel = model("Items", ItemSchema);
exports.RoonModel = model("Roons", RoonSchema);
exports.ComboModel = model("ComboHero", ComboSchema);
exports.LatenModel = model("LatensSkills", LatenSchema);
exports.ChallengerModel = model("ChallengerSkills", ChallengerSchema);
exports.TierlistModel = model("Tierlist", TierSchema);
exports.TeamModel = model("teamhero", TeamSchema);
