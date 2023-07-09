const mongoose = require('mongoose');
let d = require('./t');
exports.tierListSchema = new mongoose.Schema({
    image: d,
  });