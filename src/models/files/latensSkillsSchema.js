const mongoose = require('mongoose');
let d = require('./d');
exports.latensSkillsSchema = new mongoose.Schema({
    name: d,
    image: d,
    effect: d,
    color: d,
  });