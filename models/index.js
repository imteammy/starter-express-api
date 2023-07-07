const mongoose = require("mongoose");

const { heroSchema } = require('./files/heroes');
const { itemSchema } = require('./files/item');
const { heroComboSchema } = require('./files/heroComboSchema');
const { teamHeroSchema } = require('./files/teamHeroSchema');
const { roonSchema } = require('./files/roonSchema');
const { latensSkillsSchema } = require('./files/latensSkillsSchema');
const { ChallengerSkillsSchema } = require('./files/ChallengerSkillsSchema');
const { tierListSchema } = require('./files/tierListSchema');


const Items = mongoose.model("Items", itemSchema);
const Hero = mongoose.model("Hero", heroSchema);
const Roons = mongoose.model("Roons", roonSchema);
const ComboHero = mongoose.model("ComboHero", heroComboSchema);
const LatensSkills = mongoose.model("LatensSkills", latensSkillsSchema);
const ChallengerSkills = mongoose.model("ChallengerSkills", ChallengerSkillsSchema);
const TierList = mongoose.model("Tierlist", tierListSchema);
const teamHero = mongoose.model("teamhero", teamHeroSchema);

module.exports = {
  Hero,
  Roons,
  LatensSkills,
  ChallengerSkills,
  Items,
  TierList,
  ComboHero,
  teamHero
};
