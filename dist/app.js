"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("cors");
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./app/modules/user/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.cors)());
app.use("/api/v1/users", user_route_1.UserRoutes);
const getAController = (req, res) => {
    res.send("Hallo World");
};
app.get("/", getAController);
exports.default = app;
