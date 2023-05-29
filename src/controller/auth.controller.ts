
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import DealerModel from "../models/dealer.model"
import { omit } from "lodash";


const getDealerByEmailHandler = async (req: Request, res: Response) => {
    const email = req.params.email
    console.log("email", email)
    // const password = req.body.password

        try { /**MongoDb call */
           
          const user = await DealerModel.findOne({email: email})
            //  console.log("user", user)
        if (user === null) {
                    return res.status(401).send({
                        message: "Dealer not found"
                    })
                       
                }
                    return res.send(user)
                
        

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    
};

const getDealerByIdHandler = async (req: Request, res: Response) => {
    console.log("getDealerByIdHandler ran")
    const id = req.params.id
    console.log("getDealerByIdHandler", id)
    // const password = req.body.password
  
        try { /**MongoDb call */
        if (mongoose.Types.ObjectId.isValid(id)) { 
          const user = await DealerModel.findOne({_id: id})
             console.log("user", user)
        if (user === null) {
                    return res.status(401).send({
                        message: "Dealer  found"
                    })
                       
                }
                    return res.send(user)
                
        
            }
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
        
};



export default {
    getDealerByIdHandler,
    getDealerByEmailHandler 
}