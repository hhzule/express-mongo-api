"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    port: 1387,
    dbUri: process.env.DB_URI
};
