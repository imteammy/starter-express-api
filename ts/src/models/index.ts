import { model } from "mongoose";

import HeroSchema from './schema/hero';
import ItemSchema from './schema/item';
import ComboSchema from './schema/combo';
import TeamSchema from './schema/team';
import RoonSchema from './schema/roon';
import LatenSchema from './schema/laten';
import ChallengerSchema from './schema/challenger';
import TierSchema from './schema/tierlist';

export const HeroModel = model("Hero", HeroSchema);
export const ItemModel = model("Items", ItemSchema);
export const RoonModel = model("Roons", RoonSchema);
export const ComboModel = model("ComboHero", ComboSchema);
export const LatenModel = model("LatensSkills", LatenSchema);
export const ChallengerModel = model("ChallengerSkills", ChallengerSchema);
export const TierlistModel = model("Tierlist", TierSchema);
export const TeamModel = model("teamhero", TeamSchema);
