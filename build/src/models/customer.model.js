"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    commision: { type: Number, required: true, default: 1 },
}, {
    timestamps: true,
});
const CustomerModel = mongoose_1.default.model("Customer", userSchema);
exports.default = CustomerModel;
