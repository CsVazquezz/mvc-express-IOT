"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
//Para poder acceder a las variables del ambiente (.env)
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.listen(process.env.SERVER_PORT, function () {
    console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
