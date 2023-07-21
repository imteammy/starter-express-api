"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const t_1 = __importDefault(require("./t"));
let a = {
    name: t_1.default,
    image: t_1.default,
};
const teamHeroSchema = new mongoose_1.Schema({
    teamName: t_1.default,
    teamImage: t_1.default,
    team: {
        one: a,
        two: a,
        three: a,
        four: a,
        five: a,
    },
});
exports.default = teamHeroSchema;
