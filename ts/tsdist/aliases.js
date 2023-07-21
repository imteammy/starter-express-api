"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = require("module-alias");
let S = __dirname + /src/;
(0, module_alias_1.addAliases)({
    "@models": S + "models",
    "@controllers": S + "controllers",
    "@middleware": S + "middleware",
    "@config": S + "config",
    "@route": S + "routes",
});
