import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import { createDealer } from "../service/dealer.service"
import DealerModel, { DealerDocument } from "../models/dealer.model";

const createDealerHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    if (req.body.auth) {
        try { /**MongoDb call */
            const dealer = await createDealer(req.body)
            return res.send(dealer)
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};

const getAllDealersHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
        const dealers = await DealerModel.find()
        return res.send(dealers)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

const updateDealerHandler = async (req: Request, res: Response) => {
    if (req.body.auth) {
        const id = req.body._id;
        const data = req.body
        try {
            /**MongoDb call */
            let updatedDealer
            if (mongoose.Types.ObjectId.isValid(id)) {
                updatedDealer = await DealerModel.findByIdAndUpdate(id, { $set: { name: data.name, email: data.email, company: data.company } }, { new: true })
                if (updatedDealer) {
                    return res.send(updatedDealer)
                }
            }

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};
const deleteDealerHandler = async (req: Request, res: Response) => {
    if (req.body.auth) {
        const id = req.body._id;
        try {
            /**MongoDb call */
            let deletedDealer
            if (mongoose.Types.ObjectId.isValid(id)) {
                deletedDealer = await DealerModel.findByIdAndRemove(id)
                if (deletedDealer) {
                    return res.send(deletedDealer)
                } else {
                    return res.send("no such dealer exits")
                }
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
    createDealerHandler,
    getAllDealersHandler,
    updateDealerHandler,
    deleteDealerHandler


}

