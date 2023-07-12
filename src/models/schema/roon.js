const mongoose = require('mongoose');
let d = require('./t');
exports.roonSchema = new mongoose.Schema({
    name: d,
    color: d,
    image: d,
    effect: d,
  });