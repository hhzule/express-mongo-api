import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import WatchModel from "../models/watch.model";



const createWatchHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    try { /**MongoDb call */
        const watch = await WatchModel.create(req.body)
        return res.send(watch)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

// response
// {
//     "name": "Rolex",
//     "model": "XX-de",
//     "owner": "JHON",
//     "price": 1900,
//     "status": "pending approval",
//     "_id": "642de778fcb591c27fbbd2a9",
//     "createdAt": "2023-04-05T21:26:16.776Z",
//     "updatedAt": "2023-04-05T21:26:16.776Z",
//     "__v": 0
// }

// missing field
// Watch validation failed: owner: Path `owner` is required.

const getAllWatchesHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
        const watches = await WatchModel.find()
        return res.send(watches)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const updateWatchHandler = async (req: Request, res: Response) => {
    const id = req.body._id;
    const data = req.body
    try {
        /**MongoDb call */
        let updatedWatch
        if (mongoose.Types.ObjectId.isValid(id)) {
            updatedWatch = await WatchModel.findByIdAndUpdate(id, { $set: data }, { new: true })
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
};


const deleteWatchHandler = async (req: Request, res: Response) => {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let deletedWatch
        if (mongoose.Types.ObjectId.isValid(id)) {
            deletedWatch = await WatchModel.findByIdAndRemove(id)
            if (deletedWatch) {
                return res.send(deletedWatch)
            }
        } else {
            return res.send("no such watch exits")
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

export default {
    createWatchHandler,
    getAllWatchesHandler,
    updateWatchHandler,
    deleteWatchHandler


}