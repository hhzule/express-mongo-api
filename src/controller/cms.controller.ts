
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import CmsModel from "../models/cms.model"



const getCMSHandler = async (req: Request, res: Response) => {

        try { /**MongoDb call */

          const cms = await CmsModel.find()
             console.log("user", cms)
        if (cms === null) {
                    return res.status(401).send({
                        message: "cms not found"
                    })       
                }
                    return res.send(cms)
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
    
};

const updateCMSHandler = async (req: Request, res: Response) => {
console.log("see==>",req.body)
    const data = req.body.key
    const id = req.body.id
  let resData;
        try { /**MongoDb call */
        let itm = Object.keys(data)
        console.log("itm", itm[0])
        switch(itm[0]) {
          
            case "brand":
            resData = await CmsModel.findByIdAndUpdate (id, { $set: { brand: data.brand } }, { new: true })
              break;
            case "caseMaterial":
                resData = await CmsModel.findByIdAndUpdate (id, { $set: { caseMaterial : data.caseMaterial } }, { new: true })
              break;
              case "braceletMaterial":
                resData = await CmsModel.findByIdAndUpdate (id, { $set: { braceletMaterial : data.braceletMaterial } }, { new: true })
                break;
                case "movementMechanism":
                    resData = await CmsModel.findByIdAndUpdate (id, { $set: { movementMechanism : data.movementMechanism } }, { new: true })
                  
                    break;
                    case "feature":
                        resData = await CmsModel.findByIdAndUpdate (id, { $set: { feature : data.feature } }, { new: true })
                  
                        break;
            default:
              // code block
          } 
         
    
          
             console.log("data", resData)
        if (data === null) {
                    return res.status(401).send({
                        message: "Api error"
                    })
                       
                }
                    return res.send(resData)

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
        
};



export default {
    getCMSHandler,
    updateCMSHandler 
}