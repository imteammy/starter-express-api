"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const auth_1 = __importDefault(require("../middleware/auth"));
const app = (0, express_1.default)();
const router = () => {
    app.get('/clear', controllers_1.Clear);
    app.get("/:models/", controllers_1.GetAll);
    app.get("/:models/:id/", controllers_1.GetID);
    app.post("/:models/:id", auth_1.default, controllers_1.GetID);
    app.post("/:models/add", auth_1.default, controllers_1.Create);
    app.post("/:models/addMany", auth_1.default, controllers_1.CreateMany);
    app.post("/:models/update", auth_1.default, controllers_1.Update);
    app.put("/:models/update", auth_1.default, controllers_1.Update);
    app.post("/:models/delete", auth_1.default, controllers_1.Remove);
    app.delete("/:models/delete", auth_1.default, controllers_1.Remove);
};
exports.default = router;
