const mongoose = require('mongoose');
exports.tierListSchema = new mongoose.Schema({
    image: { type: String, default: "null" },
  });