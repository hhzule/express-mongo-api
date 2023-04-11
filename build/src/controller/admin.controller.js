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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const customer_model_1 = __importDefault(require("../models/customer.model"));
const customer_model_2 = __importDefault(require("../models/customer.model"));
const adjustCommisionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { /**MongoDb call */
        switch (req.body.userType) {
            case "customer":
                const customer = yield customer_model_1.default.create(req.body);
                return res.send(customer);
            case "dealer":
                const dealer = yield customer_model_2.default.create(req.body);
                return res.send(dealer);
            default:
                return res.send("unauthorised");
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
exports.default = {
    adjustCommisionHandler,
};
