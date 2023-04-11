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
const dealer_service_1 = require("../service/dealer.service");
const dealer_model_1 = __importDefault(require("../models/dealer.model"));
const createDealerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    // if (req.body.auth) {
    try { /**MongoDb call */
        const dealer = yield (0, dealer_service_1.createDealer)(req.body);
        return res.send(dealer);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
    // } else {
    //     return res.status(401).send("not authorised");
    // }
});
//  success response
// {
//     "email": "gg@gmail.com",
//     "name": "AltonAgain",
//     "company": "abc",
//     "commision": 5,
//     "_id": "642dd87ed111ad826a558b24",
//     "createdAt": "2023-04-05T20:22:22.481Z",
//     "updatedAt": "2023-04-05T20:22:22.481Z",
//     "__v": 0
// }
//  duplicate key error
// MongoServerError: E11000 duplicate key error collection: test.dealers index: email_1 dup key: { email: "gg@gmail.com" }
// validation error, required key missing
// ValidationError: company: Path `company` is required.
const getAllDealersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { /**MongoDb call */
        const dealers = yield dealer_model_1.default.find();
        return res.send(dealers);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
// 642dd9b397ff773ad19042f0
const updateDealerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.body.auth) {
    const id = req.body._id;
    const data = req.body;
    try {
        /**MongoDb call */
        let updatedDealer;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            updatedDealer = yield dealer_model_1.default.findByIdAndUpdate(id, { $set: req.body }, { new: true });
            if (updatedDealer) {
                return res.send(updatedDealer);
            }
        }
        else {
            return res.status(409).send("user doesn't exist");
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
    // } else {
    //     return res.status(401).send("not authorised");
    // }
});
// success response
// {
//     "_id": "642dd9b397ff773ad19042f0",
//     "email": "dxx@gmail.com",
//     "name": "oooo", // name updated
//     "company": "abc",
//     "commision": 5,
//     "createdAt": "2023-04-05T20:27:31.519Z",
//     "updatedAt": "2023-04-05T20:30:31.604Z",
//     "__v": 0
// }
// id doesnt math error
// user doesn't exist
const deleteDealerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.body.auth) {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let deletedDealer;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            deletedDealer = yield dealer_model_1.default.findByIdAndRemove(id);
            if (deletedDealer) {
                return res.send(deletedDealer);
            }
        }
        else {
            return res.status(409).send("no such dealer exits");
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
    // } else {
    //     return res.status(401).send("not authorised");
    // }
});
// success response
// {                 complete user object
//     "_id": "642dd9b397ff773ad19042f0",
//     "email": "dxx@gmail.com",
//     "name": "dddddd",
//     "company": "abc",
//     "commision": 5,
//     "createdAt": "2023-04-05T20:27:31.519Z",
//     "updatedAt": "2023-04-05T20:35:11.418Z",
//     "__v": 0
// }
// invalid id error 
// no such dealer exits
exports.default = {
    createDealerHandler,
    getAllDealersHandler,
    updateDealerHandler,
    deleteDealerHandler
};
