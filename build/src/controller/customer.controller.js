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
const customer_model_1 = __importDefault(require("../models/customer.model"));
const createCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try { /**MongoDb call */
        const customer = yield customer_model_1.default.create(req.body);
        return res.send(customer);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
const getAllCustomersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { /**MongoDb call */
        const customers = yield customer_model_1.default.find();
        return res.send(customers);
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
// export const getCustomerHandler = async (req: Request, res: Response) => {
//     const id = req.body.id;
//     try {
//         /**MongoDb call */
//         const customers = await CustomerModel.findById(id)
//         return res.send("user")
//     } catch (e: any) {
//         logger.error(e);
//         return res.status(409).send(e.message);
//     }
// };
const updateCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body._id;
    const data = req.body;
    try {
        /**MongoDb call */
        let updatedCustomer;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            updatedCustomer = yield customer_model_1.default.findByIdAndUpdate(id, { $set: { name: data.name, email: data.email, company: data.company } }, { new: true });
            if (updatedCustomer) {
                return res.send(updatedCustomer);
            }
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
const deleteCustomerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let deletedCustomer;
        if (mongoose_1.default.Types.ObjectId.isValid(id)) {
            deletedCustomer = yield customer_model_1.default.findByIdAndRemove(id);
            if (deletedCustomer) {
                return res.send(deletedCustomer);
            }
            else {
                return res.send("no such customer exits");
            }
        }
    }
    catch (e) {
        logger_1.default.error(e);
        return res.status(409).send(e.message);
    }
});
exports.default = {
    createCustomerHandler,
    getAllCustomersHandler,
    updateCustomerHandler,
    deleteCustomerHandler
};
