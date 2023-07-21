import { Schema } from "mongoose";
import d from "./t";
let a = {
  name: d,
  image: d,
};
let b = {
  one: a,
  two: a,
  three: a,
  four: a,
  five: a,
};
const heroComboSchema = new Schema({
  comboName: d,
  comboImage: d,
  heroCombo: b,
  comboLost: b,
  itemsSolution: b,
  comboWin: b,
});

export default heroComboSchema;