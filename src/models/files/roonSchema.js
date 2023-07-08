const mongoose = require('mongoose');
let d = require('./d');
exports.roonSchema = new mongoose.Schema({
    name: d,
    color: d,
    image: d,
    effect: d,
  });