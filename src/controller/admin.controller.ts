import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import AdminModel from "../models/admin.model"
import { omit } from "lodash";
import WatchModel from "../models/watch.model";
import {mint} from "../utils/calls"

const addWatchesHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()
    const data = req.body.watches
    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

try {

        let key: string = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
        let addresses = [];
        let quantity : number[]= [];
        let customObj: any = {};
        let watchesAdd = data.map((itm: any) => {
            if (customObj.hasOwnProperty(itm.holderAddress)) {
                let value = customObj[itm.holderAddress];
                return (customObj[itm.holderAddress] = ++value);
              } else {
                return (customObj[itm.holderAddress] = 1);
              }
        });
        addresses = Object.keys(customObj);
        quantity = Object.values(customObj);

      const trax: any = await mint(addresses,quantity, key)

    /**MongoDb call */
    let updatedWatch
    if (trax?.length > 0) {
        let finalObj = [];
        let resObj = []

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < trax.length; j++) {
            if (
              data[i].holderAddress.toLocaleLowerCase() ===
              trax[j].to.toLocaleLowerCase()
            ) {
              let newObj = data[i];
              newObj.tokenId = trax[j].tokenId;
              finalObj.push(newObj);
              trax[j].to = "";
              break;
            }
          }
        }
// console.log("final", finalObj)
        for (let i = 0; i < finalObj.length; i++) {
            updatedWatch = await WatchModel.findByIdAndUpdate(finalObj[i]._id, { tokenId: finalObj[i].tokenId, status: "Approved" }, { new: true })
      if(updatedWatch){
        // console.log("first", updatedWatch)
        updatedWatch.status = "Approved"
        resObj.push(updatedWatch)
      }
          }

        if (updatedWatch) {
            return res.send(resObj)
        }
    } else {
        return res.status(409).send("item doesn't exist");
    }
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    } else {
        return res.status(401).send("not authorised");
    }
};

const adjustCommissionHandler = async (req: Request, res: Response) => {
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
        return res.send(admins)
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
    addWatchesHandler,
    adjustCommissionHandler,
    createAdminHandler,
    getAdminHandler,
    updateAdminHandler,
    deleteAdminHandler
}