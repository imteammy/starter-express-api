"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const t_1 = __importDefault(require("./t"));
const tierListSchema = new mongoose_1.Schema({
    image: t_1.default,
});
exports.default = tierListSchema;
