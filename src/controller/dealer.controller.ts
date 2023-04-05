import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import { createDealer } from "../service/dealer.service"
import DealerModel, { DealerDocument } from "../models/dealer.model";

const createDealerHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    // if (req.body.auth) {
    try { /**MongoDb call */
        const dealer = await createDealer(req.body)
        return res.send(dealer)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
    // } else {
    //     return res.status(401).send("not authorised");
    // }
};

//  success response
// {
//     "email": "gg@gmail.com",
//     "name": "AltonAgain",
//     "company": "abc",
//     "commision": 5,
//     "_id": "642dd87ed111ad826a558b24",
//     "createdAt": "2023-04-05T20:22:22.481Z",
//     "updatedAt": "2023-04-05T20:22:22.481Z",
//     "__v": 0
// }

//  duplicate key error
// MongoServerError: E11000 duplicate key error collection: test.dealers index: email_1 dup key: { email: "gg@gmail.com" }

// validation error, required key missing
// ValidationError: company: Path `company` is required.
const getAllDealersHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
        const dealers = await DealerModel.find()
        return res.send(dealers)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

// 642dd9b397ff773ad19042f0

const updateDealerHandler = async (req: Request, res: Response) => {
    // if (req.body.auth) {
    const id = req.body._id;
    const data = req.body
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
    // } else {
    //     return res.status(401).send("not authorised");
    // }
};

// success response
// {
//     "_id": "642dd9b397ff773ad19042f0",
//     "email": "dxx@gmail.com",
//     "name": "oooo", // name updated
//     "company": "abc",
//     "commision": 5,
//     "createdAt": "2023-04-05T20:27:31.519Z",
//     "updatedAt": "2023-04-05T20:30:31.604Z",
//     "__v": 0
// }

// id doesnt math error
// user doesn't exist


const deleteDealerHandler = async (req: Request, res: Response) => {
    // if (req.body.auth) {
    const id = req.body._id;
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
    // } else {
    //     return res.status(401).send("not authorised");
    // }
};

// success response
// {                 complete user object
//     "_id": "642dd9b397ff773ad19042f0",
//     "email": "dxx@gmail.com",
//     "name": "dddddd",
//     "company": "abc",
//     "commision": 5,
//     "createdAt": "2023-04-05T20:27:31.519Z",
//     "updatedAt": "2023-04-05T20:35:11.418Z",
//     "__v": 0
// }

// invalid id error 
// no such dealer exits



export default {
    createDealerHandler,
    getAllDealersHandler,
    updateDealerHandler,
    deleteDealerHandler


}

