const { Schema } = require('mongoose');
let d = require('./t');
exports.latensSkillsSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  color: d,
});