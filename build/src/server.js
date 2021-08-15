"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default("node-angular");
const http_1 = __importDefault(require("http"));
//const express = require('express');
const normalizePort = (val) => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};
const port = normalizePort(process.env.PORT || "3000");
app_1.default.set("port", port);
const server = http_1.default.createServer(app_1.default);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
    console.log('Server on port 3000');
});
