const { Schema } = require("mongoose");
let d = require("./t");
let a = {
  name: d,
  image: d,
};
let b = {
  one: a,
  two: a,
  three: a,
  four: a,
  five: a,
};
exports.heroComboSchema = new Schema({
  comboName: d,
  comboImage: d,
  heroCombo: b,
  comboLost: b,
  itemsSolution: b,
  comboWin: b,
});
