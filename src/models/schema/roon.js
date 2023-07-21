const { Schema } = require('mongoose');
let d = require('./t');
exports.roonSchema = new Schema({
  name: d,
  color: d,
  image: d,
  effect: d,
});