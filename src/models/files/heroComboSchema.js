const mongoose = require("mongoose");
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
exports.heroComboSchema = new mongoose.Schema({
  comboName: d,
  comboImage: d,
  heroCombo: b,
  comboLost: b,
  itemsSolution: b,
  comboWin: b,
});
