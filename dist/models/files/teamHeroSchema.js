let e = require('mongoose'),
  m = require('./t'),
  a = { name: m, image: m }
exports.teamHeroSchema = new e.Schema({
  teamName: m,
  teamImage: m,
  team: { one: a, two: a, three: a, four: a, five: a }
})
