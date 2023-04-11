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
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("../utils/server"));
const dealer_service_1 = require("../service/dealer.service");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const app = (0, server_1.default)();
// import * as UserService from "../service/user.service";
// import * as SessionService from "../service/session.service";
// import { createUserSessionHandler } from "../controller/session.controller";
const id = new mongoose_1.default.Types.ObjectId().toString();
console.log("_id==>", id);
const newDealerPayload = {
    _id: id,
    email: "hh@gmail.com",
    name: "hh",
    company: "ABC company",
    commision: 5
};
describe("dealer", () => {
    // dealer creation
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
        yield mongoose_1.default.connect(mongoServer.getUri());
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
        yield mongoose_1.default.connection.close();
    }));
    describe("Dealer", () => {
        describe("create dealer", () => {
            it("should return ==> ok", () => __awaiter(void 0, void 0, void 0, function* () {
                const newDealer = yield (0, dealer_service_1.createDealer)(newDealerPayload);
                // const { body, statusCode } = await supertest(app).post('/createdealer');
                console.log("first ==>", newDealer);
            }));
        });
    });
});
