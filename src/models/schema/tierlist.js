const { Schema } = require('mongoose');
let d = require('./t');
exports.tierListSchema = new Schema({
  image: d,
});