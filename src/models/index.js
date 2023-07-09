const r = r => require(r);
const mongoose = r("mongoose");
const f = './files/'
const heroSchema = r(f+'heroes');
const itemSchema = r(f+'item');
const heroComboSchema = r(f+'heroComboSchema');
const teamHeroSchema = r(f+'teamHeroSchema');
const roonSchema = r(f+'roonSchema');
const latensSkillsSchema = r(f+'latensSkillsSchema');
const ChallengerSkillsSchema = r(f+'ChallengerSkillsSchema');
const tierListSchema = r(f+'tierListSchema');


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
