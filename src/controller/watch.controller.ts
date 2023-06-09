import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import WatchModel from "../models/watch.model";
import TransactionModel from "../models/transaction.model";



const createWatchHandler = async (req: Request, res: Response) => {
    // console.log(req.body);
    try { /**MongoDb call */
        const watch = await WatchModel.create(req.body)
        return res.send(watch)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const getAllWatchesHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
         const transactions = await TransactionModel.find();
        // console.log(transactions)
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

const getWatchByIdHandler = async (req: Request, res: Response) => {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let Watch
        if (mongoose.Types.ObjectId.isValid(id)) {
            Watch = await WatchModel.findById(id)
            if (Watch) {
                return res.send(Watch)
            }
        } else {
            return res.send("no such watch exits")
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};
const getWatchMetadata = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        /**MongoDb call */
      
          let  Watch = await WatchModel.findOne({tokenId:id})
            if (Watch) {
                let metadata = {
                    name:Watch.name,
                    image: Watch.imgUrl,
                    description:`innovative NFT explorer, users can dive into a vast collection of watch-themed NFTs, gaining insights, discovering rare pieces, and immersing themselves in the captivating world of horology.`
                }
                return res.send(metadata)
            }
        else {
            return res.send("no such watch exits")
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const getWatchByCreatorIdHandler = async (req: Request, res: Response) => {
    const id = req.params.id

    // 6454f5f41e0c5fb13f842edb
    try {
        /**MongoDb call */
        let Watches
        if (mongoose.Types.ObjectId.isValid(id)) {
            Watches = await WatchModel.find({creator: id})
            if (Watches) {
                return res.send(Watches)
            }
        } else {
            return res.send("no watch exits")
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const getWatchByTokenIdHandler = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        /**MongoDb call */
        let Watches
            Watches = await WatchModel.find({tokenId: id})
            if (Watches) {
                return res.send(Watches)
            }

            return res.send("no watch exits")

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

// ********************************************
// wath search controller
// ********************************************
const getWatchByBrandHandler = async (req: Request, res: Response) => {
    // req.body will contain ana array ["brand","serialNumber"]
    // if only ["brand"] then run if , if ["brand","serialNumber"] run else
    if(req.body.length > 1){
        const name = req.body[0]
        try {
        /**MongoDb call */
        let Watches
            Watches = await WatchModel.find({name})
            if (Watches) {
                return res.send(Watches)
            }

            return res.send("no watch exits")

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
    }else{
        const name = req.body[0]
        const serialNumber = req.body[1]
        try {
        /**MongoDb call */
        let Watches
            Watches = await WatchModel.find({name, serialNumber})
            if (Watches) {
                return res.send(Watches)
            }

            return res.send("no watch exits")

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }

    }

};

export default {
    getWatchByBrandHandler,
    getWatchByTokenIdHandler,
    getWatchMetadata,
    createWatchHandler,
    getAllWatchesHandler,
    updateWatchHandler,
    deleteWatchHandler,
    getWatchByIdHandler,
    getWatchByCreatorIdHandler
}