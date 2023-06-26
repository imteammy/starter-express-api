const mongoose = require("mongoose");

const tierListSchema = new mongoose.Schema({
  image: { type: String, default: "null" },
});

const heroSchema = new mongoose.Schema({
  name: { type: String, default: "null" },
  story: { type: String, default: "null" },
  image: { type: String, default: "null" },
  role: {
    main: { type: String, default: "null" },
    sub: { type: String, default: "null" },
  },
  passiveSkill: {
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
  },
  firstSkill: {
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
  },
  secondSkill: {
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
  },
  ultimateSkill: {
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
    cooldown: { type: String, default: "null" },
  },
  items: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
    six: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      price: { type: String, default: "null" },
    },
  },
  roons: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      total: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      total: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
      total: { type: String, default: "null" },
    },
  },
  challengerSkills: {
    name: { type: String, default: "null" },
    image: { type: String, default: "null" },
    effect: { type: String, default: "null" },
  },
  LatensSkills: {
    one: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
    },
    two: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
    },
    three: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
        effect: { type: String, default: "null" },
      },
    },
  },
  comboHero: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
});

const roonSchema = new mongoose.Schema({
  name: { type: String, default: "null" },
  color: { type: String, default: "null" },
  image: { type: String, default: "null" },
  effect: { type: String, default: "null" },
});

const latensSkillsSchema = new mongoose.Schema({
  name: { type: String, default: "null" },
  image: { type: String, default: "null" },
  effect: { type: String, default: "null" },
  color: { type: String, default: "null" },
});

const ChallengerSkillsSchema = new mongoose.Schema({
  name: { type: String, default: "null" },
  image: { type: String, default: "null" },
  effect: { type: String, default: "null" },
  cooldown: { type: String, default: "null" },
});

const itemSchema = new mongoose.Schema({
  name: { type: String, default: "null" },
  image: { type: String, default: "null" },
  effect: { type: String, default: "null" },
  itemPassive: { type: String, default: "null" },
  cooldown: { type: String, default: "null" },
  cost: { type: String, default: "null" },
});

const heroComboSchema = new mongoose.Schema({
  comboName: { type: String, default: "null" },
  comboImage: { type: String, default: "null" },
  heroCombo: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
  comboLost: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
  itemsSolution: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
  comboWin: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
});
const teamHeroSchema = new mongoose.Schema({
  teamName: { type: String, default: "null" },
  teamImage: { type: String, default: "null" },
  team: {
    one: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    two: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    three: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    four: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
    five: {
      name: { type: String, default: "null" },
      image: { type: String, default: "null" },
    },
  },
});

const Items = mongoose.model("Items", itemSchema);
const Hero = mongoose.model("Hero", heroSchema);
const Roons = mongoose.model("Roons", roonSchema);
const ComboHero = mongoose.model("ComboHero", heroComboSchema);
const LatensSkills = mongoose.model("LatensSkills", latensSkillsSchema);
const ChallengerSkills = mongoose.model(
  "ChallengerSkills",
  ChallengerSkillsSchema
);
const TierList = mongoose.model("Tierlist", tierListSchema);

module.exports = {
  Hero,
  Roons,
  LatensSkills,
  ChallengerSkills,
  Items,
  TierList,
  ComboHero,
};
