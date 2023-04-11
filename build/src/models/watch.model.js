"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    owner: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
}, {
    timestamps: true,
});
const WatchModel = mongoose_1.default.model("Watch", userSchema);
exports.default = WatchModel;
