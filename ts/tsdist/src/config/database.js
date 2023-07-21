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
const mongoose_1 = require("mongoose");
let URL = 'mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/ROV';
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)(URL, {
        connectTimeoutMS: 30000
    })
        .then(() => {
        console.log('> 💻 [ Database ] MongoDB connected');
    }).catch((err) => {
        console.error(err.message);
    });
});
exports.default = connectDB;
