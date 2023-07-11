const r = r => require(r);
const mongoose = r("mongoose");
const f = './files/'
const heroSchema = r(f + 'heroes');
const itemSchema = r(f + 'item');
const heroComboSchema = r(f + 'heroComboSchema');
const teamHeroSchema = r(f + 'teamHeroSchema');
const roonSchema = r(f + 'roonSchema');
const latensSkillsSchema = r(f + 'latensSkillsSchema');
const ChallengerSkillsSchema = r(f + 'ChallengerSkillsSchema');
const tierListSchema = r(f + 'tierListSchema');

exports.Items = mongoose.model("Items", itemSchema);
exports.Hero = mongoose.model("Hero", heroSchema);
exports.Roons = mongoose.model("Roons", roonSchema);
exports.ComboHero = mongoose.model("ComboHero", heroComboSchema);
exports.LatensSkills = mongoose.model("LatensSkills", latensSkillsSchema);
exports.ChallengerSkills = mongoose.model("ChallengerSkills", ChallengerSkillsSchema);
exports.TierList = mongoose.model("Tierlist", tierListSchema);
exports.teamHero = mongoose.model("teamhero", teamHeroSchema);
