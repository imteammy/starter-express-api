import { Schema } from "mongoose";
import d from './t';
const itemSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  itemPassive: d,
  cooldown: d,
  cost: d,
});
export default itemSchema