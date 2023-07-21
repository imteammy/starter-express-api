"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModel = exports.TierlistModel = exports.ChallengerModel = exports.LatenModel = exports.ComboModel = exports.RoonModel = exports.ItemModel = exports.HeroModel = void 0;
const mongoose_1 = require("mongoose");
const hero_1 = __importDefault(require("./schema/hero"));
const item_1 = __importDefault(require("./schema/item"));
const combo_1 = __importDefault(require("./schema/combo"));
const team_1 = __importDefault(require("./schema/team"));
const roon_1 = __importDefault(require("./schema/roon"));
const laten_1 = __importDefault(require("./schema/laten"));
const challenger_1 = __importDefault(require("./schema/challenger"));
const tierlist_1 = __importDefault(require("./schema/tierlist"));
exports.HeroModel = (0, mongoose_1.model)("Hero", hero_1.default);
exports.ItemModel = (0, mongoose_1.model)("Items", item_1.default);
exports.RoonModel = (0, mongoose_1.model)("Roons", roon_1.default);
exports.ComboModel = (0, mongoose_1.model)("ComboHero", combo_1.default);
exports.LatenModel = (0, mongoose_1.model)("LatensSkills", laten_1.default);
exports.ChallengerModel = (0, mongoose_1.model)("ChallengerSkills", challenger_1.default);
exports.TierlistModel = (0, mongoose_1.model)("Tierlist", tierlist_1.default);
exports.TeamModel = (0, mongoose_1.model)("teamhero", team_1.default);
