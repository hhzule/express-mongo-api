import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import { createDealer } from "../service/dealer.service"
import DealerModel from "../models/dealer.model";
import AdminModel from "../models/admin.model"
import { omit } from "lodash"

const createDealerHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

        try { /**MongoDb call */

            const dealer = await createDealer(req.body)
            return res.send(omit(dealer.toObject(), "password"))
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
            if (mongoose.Types.ObjectId.isValid(req.body._id)) {
                updatedDealer = await DealerModel.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
                if (updatedDealer) {
                    return res.send(omit(updatedDealer.toObject(), "password"))
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
    const dealerId = req.body._id
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()
    console.log("first")
    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {
        try {
            console.log("first")
            /**MongoDb call */
            let deletedDealer
            if (mongoose.Types.ObjectId.isValid(dealerId)) {
                deletedDealer = await DealerModel.findByIdAndRemove(dealerId)
                console.log("sec")
                if (deletedDealer) {
                    return res.send(deletedDealer)
                }
            } else {
                console.log("thi")
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
            if (mongoose.Types.ObjectId.isValid(req.body._id)) {
                Dealer = await DealerModel.findById(req.body._id)
                if (Dealer) {
                    return res.send(omit(Dealer.toObject(), "password"))
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

