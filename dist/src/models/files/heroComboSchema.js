let o = require('mongoose'),
  e = require('./t'),
  m = { name: e, image: e },
  r = { one: m, two: m, three: m, four: m, five: m }
exports.heroComboSchema = new o.Schema({
  comboName: e,
  comboImage: e,
  heroCombo: r,
  comboLost: r,
  itemsSolution: r,
  comboWin: r
})
