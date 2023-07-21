import { Schema } from "mongoose";
import d from "./t";
let a = {
  name: d,
  image: d,
};
const teamHeroSchema = new Schema({
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
export default teamHeroSchema