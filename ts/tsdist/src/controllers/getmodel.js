"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const getModel = (models) => __awaiter(void 0, void 0, void 0, function* () {
    switch (models) {
        case "hero":
            return index_1.HeroModel;
        case "item":
            return index_1.ItemModel;
        case "challenger":
            return index_1.ChallengerModel;
        case "roon":
            return index_1.RoonModel;
        case "tierlist":
            return index_1.TierlistModel;
        case "herocombo":
            return index_1.ComboModel;
        case "laten":
            return index_1.LatenModel;
        case "team":
            return index_1.TeamModel;
        default:
            return false;
    }
});
exports.default = getModel;
