const mongoose = require('mongoose');

exports.teamHeroSchema = new mongoose.Schema({
    teamName: { type: String, default: "null" },
    teamImage: { type: String, default: "null" },
    team: {
      one: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      two: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      three: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      four: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
      five: {
        name: { type: String, default: "null" },
        image: { type: String, default: "null" },
      },
    },
  });