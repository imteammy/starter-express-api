import { Schema } from 'mongoose';
import d from './t';
const roonSchema = new Schema({
  name: d,
  color: d,
  image: d,
  effect: d,
});
export default roonSchema