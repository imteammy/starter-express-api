const mongoose = require("mongoose");

const HeroSchema = require('./schema/hero');
const ItemSchema = require('./schema/item');
const ComboSchema = require('./schema/combo');
const TeamSchema = require('./schema/team');
const RoonSchema = require('./schema/roon');
const LatenSchema = require('./schema/laten');
const ChallengerSchema = require('./schema/challenger');
const TierSchema = require('./schema/tierlist');

exports.HeroModel = mongoose.model("Hero", HeroSchema);
exports.ItemModel = mongoose.model("Items", ItemSchema);
exports.RoonModel = mongoose.model("Roons", RoonSchema);
exports.ComboModel = mongoose.model("ComboHero", ComboSchema);
exports.LatenModel = mongoose.model("LatensSkills", LatenSchema);
exports.ChallengerModel = mongoose.model("ChallengerSkills", ChallengerSchema);
exports.TierlistModel = mongoose.model("Tierlist", TierSchema);
exports.TeamModel = mongoose.model("teamhero", TeamSchema);
