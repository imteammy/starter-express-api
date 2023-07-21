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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clear = exports.Remove = exports.Update = exports.CreateMany = exports.Create = exports.GetID = exports.GetAll = void 0;
const getmodel_1 = __importDefault(require("./getmodel"));
const node_1 = __importDefault(require("../config/node"));
const timeOut = 300;
function GetAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { models } = req.params || req.query;
        let Models = yield (0, getmodel_1.default)(models);
        if (!Models) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        try {
            const c = node_1.default.get(models);
            if (c)
                return res.status(200).json(c);
            const result = yield Models.find({});
            if (result.length === 0) {
                return res.status(404).json({ message: `${models} is empty!` });
            }
            node_1.default.set(models, JSON.stringify(result), timeOut);
            return res.status(200).json(result);
        }
        catch (error) {
            console.log("Error setting cache:", error);
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.GetAll = GetAll;
function GetID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { models, id } = req.params || req.query || req.body;
        try {
            let Model = yield (0, getmodel_1.default)(models);
            if (!Model) {
                return res.status(404).json({ message: "Invalid request parameters" });
            }
            const c = node_1.default.get(id);
            if (c)
                return res.json(JSON.parse(JSON.stringify(c)));
            const result = yield Model.findOne({ _id: id });
            if (!result) {
                return res.json({ message: `${models} not found!` });
            }
            node_1.default.set(id, JSON.stringify(result), timeOut);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({
                code: 500,
                message: error.message
            });
        }
    });
}
exports.GetID = GetID;
function Create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const models = req.params.models;
        try {
            const data = req.body;
            delete data.token;
            let Model = yield (0, getmodel_1.default)(models);
            if (!Model) {
                return res.status(404).json({ message: "Invalid request parameters" });
            }
            const r = yield Model.create(data);
            return res
                .status(200)
                .json({ message: `Create ${models} success.`, data: r });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.Create = Create;
function CreateMany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const models = req.params.models;
        const d = req.body;
        delete d.token;
        try {
            let Model = yield (0, getmodel_1.default)(models);
            if (!Model) {
                return res.status(404).json({ message: "Invalid request parameters" });
            }
            const result = d.map((obj) => {
                const { token } = obj, r = __rest(obj, ["token"]);
                return r;
            });
            const r = yield Model.insertMany(result);
            return res
                .status(200)
                .json({ message: `Create many ${models} successfully.`, data: r });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.CreateMany = CreateMany;
function Update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const models = req.params.models;
        const data = req.body;
        delete data.token;
        const id = { _id: data.id };
        const update = Object.assign({}, data);
        const c = node_1.default.get(data.id);
        if (c)
            return res.json(c);
        let Model = yield (0, getmodel_1.default)(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        try {
            const r = yield Model.findOneAndUpdate(id, update, { new: true });
            if (!r) {
                const message = { message: `${models} not found for update.` };
                res.status(404).json({ message: message });
            }
            node_1.default.set(data.id, JSON.stringify(r), timeOut);
            return res.status(200).json({
                message: `${models} updated success.`,
                data: r,
            });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.Update = Update;
function Remove(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const models = req.params.models;
        let Model = yield (0, getmodel_1.default)(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const { id } = req.body;
        const c = node_1.default.get(id);
        if (c)
            return res.json(c);
        try {
            const r = yield Model.findOneAndDelete({ _id: id }, { new: true });
            if (!r) {
                const message = { message: `${models} not found for delete.` };
                return res.status(200).json(message);
            }
            node_1.default.set(id, JSON.stringify(r), timeOut);
            return res
                .status(200)
                .json({ message: `Delete ${models} success.`, data: r });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.Remove = Remove;
function Clear(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        node_1.default.flushAll();
        return res.status(200).json({ message: "Cache cleared" });
    });
}
exports.Clear = Clear;
