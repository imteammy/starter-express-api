const mongoose = require('mongoose');
let d = require('./d');
exports.tierListSchema = new mongoose.Schema({
    image: d,
  });