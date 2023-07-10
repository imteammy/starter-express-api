let e = require('mongoose'),
  o = require('./t'),
  t = { name: o, image: o, effect: o, cooldown: o },
  i = { name: o, image: o, price: o },
  a = { name: o, image: o, total: o },
  n = { name: o, image: o, effect: o },
  m = { name: o, image: o }
exports.heroSchema = new e.Schema({
  name: o,
  story: o,
  image: o,
  role: { main: o, sub: o },
  passiveSkill: t,
  firstSkill: t,
  secondSkill: t,
  ultimateSkill: t,
  items: { one: i, two: i, three: i, four: i, five: i, six: i },
  roons: { one: a, two: a, three: a },
  challengerSkills: { name: o, image: o, effect: o },
  LatensSkills: {
    one: { one: n, two: n, three: n },
    two: { one: n, two: n },
    three: { one: n, two: n }
  },
  comboHero: { one: m, two: m, three: m, four: m, five: m }
})
