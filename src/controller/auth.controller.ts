
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import DealerModel from "../models/dealer.model"
import { omit } from "lodash";


const getCustomerByEmailHandler = async (req: Request, res: Response) => {
    const email = req.params.email
    console.log("email", email)
    // const password = req.body.password

        try { /**MongoDb call */
           
          const user = await DealerModel.findOne({email: email})
             console.log("user", user)
        if (user === null) {
                    return res.status(401).send({
                        message: "User not found"
                    })
                       
                }
                    return res.send(user)
                
        

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    
};

export default {
    getCustomerByEmailHandler 
}