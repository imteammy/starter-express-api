import { Schema } from 'mongoose';
import d from './t';
const latensSkillsSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  color: d,
});

export default latensSkillsSchema