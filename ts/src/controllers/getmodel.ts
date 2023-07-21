import { ChallengerModel, ComboModel, HeroModel, ItemModel, LatenModel, RoonModel, TeamModel, TierlistModel } from "../models/index";

const getModel = async (models: string) => {
  switch (models) {
    case "hero":
      return HeroModel;
    case "item":
      return ItemModel;
    case "challenger":
      return ChallengerModel;
    case "roon":
      return RoonModel;
    case "tierlist":
      return TierlistModel;
    case "herocombo":
      return ComboModel;
    case "laten":
      return LatenModel;
    case "team":
      return TeamModel;
    default:
      return false;
  }
};
export default getModel;