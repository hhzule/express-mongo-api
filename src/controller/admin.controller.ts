import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import CustomerModel from "../models/customer.model";
import DealerModel from "../models/customer.model";


const adjustCommisionHandler = async (req: Request, res: Response) => {
    if (req.body.auth) {
        const id = req.body._id;
        const data = req.body
        try { /**MongoDb call */
            switch (req.body.userType) {
                case "customer":
                    let updatedCustomer
                    if (mongoose.Types.ObjectId.isValid(id)) {
                        updatedCustomer = await CustomerModel.findByIdAndUpdate(id, { $set: data }, { new: true })
                        if (updatedCustomer) {
                            return res.send(updatedCustomer)
                        }
                    }
                case "dealer":
                    let updatedDealer
                    if (mongoose.Types.ObjectId.isValid(id)) {
                        updatedDealer = await DealerModel.findByIdAndUpdate(id, { $set: data }, { new: true })
                        if (updatedDealer) {
                            return res.send(updatedDealer)
                        }
                    }
                default:
                    return res.send("unauthorised")
            }

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};

export default {
    adjustCommisionHandler,
}