import { Schema } from 'mongoose';
import d from './t';
const ChallengerSkillsSchema = new Schema({
  name: d,
  image: d,
  effect: d,
  cooldown: d,
});
export default ChallengerSkillsSchema