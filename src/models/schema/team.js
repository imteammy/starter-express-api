const { Schema } = require("mongoose");
let d = require("./t");
let a = {
  name: d,
  image: d,
};
exports.teamHeroSchema = new Schema({
  teamName: d,
  teamImage: d,
  team: {
    one: a,
    two: a,
    three: a,
    four: a,
    five: a,
  },
});
