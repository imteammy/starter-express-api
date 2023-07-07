const mongoose = require("mongoose");

exports.heroSchema = new mongoose.Schema({
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
