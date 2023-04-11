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
const logger_1 = __importDefault(require("../utils/logger"));
const watch_model_1 = __importDefault(require("../models/watch.model"));
const createWatchHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try { /**MongoDb call */
        const watch = yield watch_model_1.default.create(req.body);
        return res.send(watch);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
// response
// {
//     "name": "Rolex",
//     "model": "XX-de",
//     "owner": "JHON",
//     "price": 1900,
//     "status": "pending approval",
//     "_id": "642de778fcb591c27fbbd2a9",
//     "createdAt": "2023-04-05T21:26:16.776Z",
//     "updatedAt": "2023-04-05T21:26:16.776Z",
//     "__v": 0
// }
// missing field
// Watch validation failed: owner: Path `owner` is required.
const getAllWatchesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { /**MongoDb call */
        const watches = yield watch_model_1.default.find();
        return res.send(watches);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
const updateWatchHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body._id;
    const data = req.body;
    try {
        /**MongoDb call */
        let updatedWatch;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            updatedWatch = yield watch_model_1.default.findByIdAndUpdate(id, { $set: data }, { new: true });
            if (updatedWatch) {
                return res.send(updatedWatch);
            }
        }
        else {
            return res.status(409).send("item doesn't exist");
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
const deleteWatchHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let deletedWatch;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            deletedWatch = yield watch_model_1.default.findByIdAndRemove(id);
            if (deletedWatch) {
                return res.send(deletedWatch);
            }
        }
        else {
            return res.send("no such watch exits");
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
exports.default = {
    createWatchHandler,
    getAllWatchesHandler,
    updateWatchHandler,
    deleteWatchHandler
};
