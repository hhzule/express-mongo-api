import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import AdminModel from "../models/admin.model"
import { omit } from "lodash";
import WatchModel from "../models/watch.model";
import {mint} from "../utils/calls"
import  {generateQRCodeWithUrl} from "./../utils/QRcodeGenerator"

const addWatchesHandler = async (req: Request, res: Response) => {
    const id = req.body.auth
    const admin: any = await AdminModel.find();
    const adminId = admin[0]?._id.toString()
    const data = req.body.watches
    if (!id || !adminId) {
        return res.send("admin undefined")
    } else if (id == adminId) {

try {
console.log("starting sorting")
        let key: string = "0xc298290a5244662b2ef0b06350b12f00f81d44842ccf0bf81488edc85ddc565b"
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
        console.log("starting mintimg")
        let trax: any ;
        try {
         trax = await mint(addresses,quantity, key)
            console.log("minting success", trax)   
        } catch (error) {
            console.log("minting failed")  
            logger.error(error);
            return res.status(409).send("minting Failed");
        }


    /**MongoDb call */
    let updatedWatch
    if (trax?.length > 0) {
        let finalObj = [];
        let resObj = []
        console.log("updating obj to add tokenId")
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
            console.log("adding qrcode")
            let qrUrl = `http://3.82.136.35/api/metadata/${finalObj[i].tokenId}`
            const qrcode = await generateQRCodeWithUrl(qrUrl)
            console.log("adding updated watch to db")
            updatedWatch = await WatchModel.findByIdAndUpdate(finalObj[i]._id, { tokenId: finalObj[i].tokenId, status: "Approved" , qrcode}, { new: true })
    //   if(updatedWatch){
    //     // console.log("first", updatedWatch)
    //     updatedWatch.status = "Approved"
    //     resObj.push(updatedWatch)
    //   }
          }

        if (updatedWatch) {
            return res.send(updatedWatch)
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
    // console.log(req.body);
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
                    return res.send("no such admin exits")
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