"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('./database');
//Initilizations
const app = express_1.default();
// --------------------------------------------------------------------------
//Settings
// --------------------------------------------------------------------------
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// --------------------------------------------------------------------------
//Routes
// --------------------------------------------------------------------------
app.use('/api', require('./routes/routePerro'));
app.use('/api', require('./routes/routeAdoptante'));
app.use('/api', require('./routes/routeFundacion'));
app.use('/api', require('./routes/routeGato'));
app.use('/api', require('./routes/routeLogin'));
//module.exports = app;
exports.default = app;
