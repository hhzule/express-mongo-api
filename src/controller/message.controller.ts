
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import MessageModel from "../models/message.model"
import CorreapondenceModel from "../models/correspodence.model"
 
import AWS from "aws-sdk"
let  myConfig = new AWS.Config({
    accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
     secretAccessKey: process.env.AWS_KEY_ID
  });
  AWS.config.update({region: 'us-east-1'});
//   quote: string;
//   senderId: string;
//   senderRole: string;
//   receiverId: string;
//   receiverRole: string;
//   acccept?: string;
//   reject?: string;
//   read?: boolean;
//   watchId: string;
const createMessageHandler = async (req: Request, res: Response) => {
    const messageBody = req.body
    let resData
     try { /**MongoDb call */
     const params = {
        data:{
            email : messageBody.senderEmail,
            emailBody:{}
        }
    }
     switch(messageBody.senderRole) {
        case "customer":
            resData = await CorreapondenceModel.CustomerMessagesModel.find({to: messageBody.receiverId})
            if(resData[0].status === false){
                var publishTextPromise = new AWS.SES({apiVersion: '2010-03-31'}).sendEmail(params).promise();
                let resData = await publishTextPromise
                console.log("MessageID is " + resData.MessageId); 
                let updateStatus = await CorreapondenceModel.CustomerMessagesModel.findOneAndUpdate({to: messageBody.receiverId},{status: true})    
            }
          break;
        case "dealer":
            resData = await CorreapondenceModel.DealerMessagesModel.find({to: messageBody.receiverId})
            if(resData[0].status === false){
                var publishTextPromise = new AWS.SES({apiVersion: '2010-03-31'}).sendEmail(params).promise();
                let resData = await publishTextPromise
                console.log("MessageID is " + resData.MessageId); 
                let updateStatus = await CorreapondenceModel.DealerMessagesModel.findOneAndUpdate({to: messageBody.receiverId},{status: true})
                 
            }
               break;
        case "admin":
            resData = await CorreapondenceModel.AdminMessagesModel.find({to: messageBody.receiverId})
            if(resData[0].status === false){
                var publishTextPromise = new AWS.SES({apiVersion: '2010-03-31'}).sendEmail(params).promise();
                let resData = await publishTextPromise
                console.log("MessageID is " + resData.MessageId); 
                let updateStatus = await CorreapondenceModel.AdminMessagesModel.findOneAndUpdate({to: messageBody.receiverId},{status: true})
                 
            }

                break;
        default:
      }
     const message = await MessageModel.create(messageBody)
      console.log("message", message)
     return res.send(message)    
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }   
};

const getMessageReceiverHandler = async (req: Request, res: Response) => {

    const id = req.params.id
     let resData;
        try { /**MongoDb call */
            const message = await MessageModel.find({receiverId:id})
                    // return res.status(401).send({
                    //     message: "Api error"
                    // })
                    return res.send(message)

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
        
};
const getMessageSenderHandler = async (req: Request, res: Response) => {

    const id = req.params.id
     let resData;
        try { /**MongoDb call */
            const message = await MessageModel.find({senderId:id})
                    // return res.status(401).send({
                    //     message: "Api error"
                    // })
                    return res.send(message)

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
        
};



export default {
    createMessageHandler,
    getMessageReceiverHandler ,
    getMessageSenderHandler
}