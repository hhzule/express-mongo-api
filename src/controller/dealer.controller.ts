import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import { createDealer } from "../service/dealer.service"
import DealerModel from "../models/dealer.model";
import AdminModel from "../models/admin.model"

const createDealerHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

        try { /**MongoDb call */

            const dealer = await createDealer(req.body)
            return res.send(dealer)
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(admin);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};

const getAllDealersHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

        try {   /**MongoDb call */
            const dealers = await DealerModel.find()
            return res.send(dealers)
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};



const updateDealerHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

        try {
            /**MongoDb call */
            let updatedDealer
            if (mongoose.Types.ObjectId.isValid(id)) {
                updatedDealer = await DealerModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
                if (updatedDealer) {
                    return res.send(updatedDealer)
                }
            } else {
                return res.status(409).send("user doesn't exist");
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
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {
        try {
            /**MongoDb call */
            let deletedDealer
            if (mongoose.Types.ObjectId.isValid(id)) {
                deletedDealer = await DealerModel.findByIdAndRemove(id)
                if (deletedDealer) {
                    return res.send(deletedDealer)
                }
            } else {
                return res.status(409).send("no such dealer exits")
            }
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};


const getDealerByIdHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

        try {
            /**MongoDb call */
            let Dealer
            if (mongoose.Types.ObjectId.isValid(id)) {
                Dealer = await DealerModel.findById(id)
                if (Dealer) {
                    return res.send(Dealer)
                }
            } else {
                return res.status(409).send("user doesn't exist");
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
    deleteDealerHandler,
    getDealerByIdHandler


}

