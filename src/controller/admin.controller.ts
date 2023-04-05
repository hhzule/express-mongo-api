import { Request, Response } from "express";
import logger from "../utils/logger";
import CustomerModel from "../models/customer.model";
import DealerModel from "../models/customer.model";


const adjustCommisionHandler = async (req: Request, res: Response) => {

    try { /**MongoDb call */
        switch (req.body.userType) {
            case "customer":
                const customer = await CustomerModel.create(req.body)
                return res.send(customer)
            case "dealer":
                const dealer = await DealerModel.create(req.body)
                return res.send(dealer)
            default:
                return res.send("unauthorised")
        }

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

export default {
    adjustCommisionHandler,
}