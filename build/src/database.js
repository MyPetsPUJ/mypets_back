"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb+srv://gabokid:bg1CbQvQEvqavI4w@cluster0.igejl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Conectado a la BD");
})
    .catch(() => {
    console.log("Conexión fallida");
});
