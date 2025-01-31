const { Schema } = require("mongoose");
let d = require("./t");
let h = { name: d, image: d, effect: d, cooldown: d };
let i = { name: d, image: d, price: d };
let r = { name: d, image: d, total: d };
let l = { name: d, image: d, effect: d };
let c = { name: d, image: d };

exports.heroSchema = new Schema({
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
