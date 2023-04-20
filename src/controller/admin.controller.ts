import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import AdminModel from "../models/admin.model"
import { omit } from "lodash";


const adjustCommisionHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {
        try { /**MongoDb call */
            let updatedAdmin
            if (mongoose.Types.ObjectId.isValid(id)) {
                updatedAdmin = await AdminModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
                if (updatedAdmin) {
                    return res.send(updatedAdmin)
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

const createAdminHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    try { /**MongoDb call */
        const number = await AdminModel.countDocuments();
        if (number == 1) {
            return res.send("admin already exist")
        } else if (number < 1) {
            const admin = await AdminModel.create(req.body)
            return res.send(omit(admin.toObject(), "password"))
        }

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

const getAdminHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
        const admins = await AdminModel.find()
        return res.send(omit(admins, "password"))
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const updateAdminHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {
        try {
            /**MongoDb call */
            let updatedAdmin
            if (mongoose.Types.ObjectId.isValid(id)) {
                updatedAdmin = await AdminModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
                if (updatedAdmin) {
                    return res.send(omit(updatedAdmin.toObject().toObject(), "password"))
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
const deleteAdminHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()

    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {
        try {
            /**MongoDb call */
            let deletedAdmin
            if (mongoose.Types.ObjectId.isValid(id)) {
                deletedAdmin = await AdminModel.findByIdAndRemove(id)
                if (deletedAdmin) {
                    return res.send(deletedAdmin)
                } else {
                    return res.send("no such customer exits")
                }
            }
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    }
    else {
        return res.status(401).send("not authorised");

    }

};

export default {
    adjustCommisionHandler,
    createAdminHandler,
    getAdminHandler,
    updateAdminHandler,
    deleteAdminHandler
}