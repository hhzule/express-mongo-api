"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dealerRoutes_1 = __importDefault(require("../routes/dealerRoutes"));
const customerRoutes_1 = __importDefault(require("../routes/customerRoutes"));
const watchRoutes_1 = __importDefault(require("../routes/watchRoutes"));
const adminRoutes_1 = __importDefault(require("../routes/adminRoutes"));
function createServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    (0, dealerRoutes_1.default)(app);
    (0, customerRoutes_1.default)(app);
    (0, watchRoutes_1.default)(app);
    (0, adminRoutes_1.default)(app);
    return app;
}
exports.default = createServer;
