"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const t_1 = __importDefault(require("./t"));
let h = { name: t_1.default, image: t_1.default, effect: t_1.default, cooldown: t_1.default };
let i = { name: t_1.default, image: t_1.default, price: t_1.default };
let r = { name: t_1.default, image: t_1.default, total: t_1.default };
let l = { name: t_1.default, image: t_1.default, effect: t_1.default };
let c = { name: t_1.default, image: t_1.default };
const heroSchema = new mongoose_1.Schema({
    name: t_1.default,
    story: t_1.default,
    image: t_1.default,
    role: {
        main: t_1.default,
        sub: t_1.default,
    },
    passiveSkill: h,
    firstSkill: h,
    secondSkill: h,
    ultimateSkill: h,
    items: {
        one: i,
        two: i,
        three: i,
        four: i,
        five: i,
        six: i,
    },
    roons: {
        one: r,
        two: r,
        three: r,
    },
    challengerSkills: {
        name: t_1.default,
        image: t_1.default,
        effect: t_1.default,
    },
    LatensSkills: {
        one: {
            one: l,
            two: l,
            three: l,
        },
        two: {
            one: l,
            two: l,
        },
        three: {
            one: l,
            two: l,
        },
    },
    comboHero: {
        one: c,
        two: c,
        three: c,
        four: c,
        five: c,
    },
});
exports.default = heroSchema;
