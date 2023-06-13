
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import MessageModel from "../models/message.model"
import AWS from "aws-sdk"

  const SES_CONFIG = {

};
const createMessageHandler = async (req: Request, res: Response) => {
    const messageBody = req.body
    var ses = new AWS.SES(SES_CONFIG);
    let resData
     try { /**MongoDb call */
     var params = {
        Destination: { /* required */
          ToAddresses: [
        "hhzule@gmail.com"
          ]
        },
        Message: { /* required */
          Body: { /* required */
            Html: {
                Charset: 'UTF-8',
                Data: 'This is the body of my email!',
            },
            Text: {
                Charset: 'UTF-8',
                Data: `Hello, Emelud!`,
            }
          },
          Subject: { /* required */
          Charset: 'UTF-8',
          Data: `Hello, Emilus!`,
          }
        },
        Source: 'hhzule@gmail.com',
        ReplyToAddresses: []
      };

    console.log("body", req.body)
    let message;
    //  const message = await MessageModel.create({firstUserId:req.body.firstUserId, secondUserId: req.body.secondUserId},{ $push:{Chat : req.body.Chat}})
       const messageone = await MessageModel.find({firstUserId:req.body.firstUserId, secondUserId: req.body.secondUserId})
       console.log("messageone", messageone)
       if(messageone.length > 0){
        console.log("from if")
          message = await MessageModel.findOneAndUpdate({firstUserId:req.body.firstUserId, secondUserId: req.body.secondUserId},{ $push:{Chat : req.body.Chat[0]}})
       }else{
        console.log("from else")
     // var publishTextPromise = ses.sendEmail(params).promise();
    //   let resData = await publishTextPromise
    //    console.log("MessageID is " + resData.MessageId);
        message = await MessageModel.create(req.body)
       }

    
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
            const message = await MessageModel.find({secondUserId:id}, { Chat: { $slice: -5 } } )
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
            const message = await MessageModel.find({firstUserId:id}, {Chat: {$slice: -5}})
                    // return res.status(401).send({
                    //     message: "Api error"
                    // })
                    return res.send(message)

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
        
};
const updateHandler = async (req: Request, res: Response) => {
try{
    console.log("body", req.body)
    let message;
   
     message = await MessageModel.findOneAndUpdate({firstUserId:req.body.firstUserId, secondUserId: req.body.secondUserId},{ $push:{Chat : req.body.Chat[0]}})
    console.log("message", message)
     return res.send(message)    
        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }   
        
};

export default {
    createMessageHandler,
    getMessageReceiverHandler ,
    getMessageSenderHandler,
    updateHandler
}


