const mongoose = require("mongoose");
let { d, h, i, r , l , c} = require("./d");
exports.heroSchema = new mongoose.Schema({
  name: d,
  story: d,
  image: d,
  role: {
    main: d,
    sub: d,
  },
  passiveSkill: h,
  firstSkill: h,
  secondSkill: h,
  ultimateSkill: h,
  items: {
    one: i,
    two: i,
    three: i,
    four: i,
    five: i,
    six: i,
  },
  roons: {
    one: r,
    two: r,
    three: r,
  },
  challengerSkills: {
    name: d,
    image: d,
    effect: d,
  },
  LatensSkills: {
    one: {
      one: l,
      two: l,
      three: l,
    },
    two: {
      one: l,
      two: l,
    },
    three: {
      one: l,
      two: l,
    },
  },
  comboHero: {
    one: c,
    two: c,
    three: c,
    four: c,
    five: c,
  },
});
