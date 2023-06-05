
import { Request, Response } from "express";
import logger from "../utils/logger";
import mongoose from "mongoose";
import OtpModel from "../models/otp.model"
import CustomerModel from "../models/customer.model"
import { omit } from "lodash"
import AWS from "aws-sdk"

let  myConfig = new AWS.Config({
    accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
     secretAccessKey: process.env.AWS_KEY_ID

  });
  AWS.config.update({region: 'us-east-1'});

const optSendSmsHandler = async (req: Request, res: Response) => {
    console.log(req.body)
    const email = req.body.email
    const phoneNumber = req.body.phone
    var digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++ ) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    let resData 
    var params = {
        Message:  `OTP to Sign up to Emilus is ${otp}`, /* required */
        PhoneNumber: phoneNumber,
        // PhoneNumber: "+923320394066",
    };

try {
    const optAuth: any = await OtpModel.findOne({email})
    console.log("user", optAuth)
    if(optAuth && optAuth.status === "verified"){
        return res.status(200).send("User already exists with this Email");
    }else if (optAuth && optAuth.status === "pending"){

           try {
             // Create promise and SNS service object
             var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
             // Handle promise's fulfilled/rejected states
             resData = await publishTextPromise
             console.log(resData)

             console.log("MessageID is " + resData.MessageId);
             try { /**MongoDb call */
           
             const optAuth = await OtpModel.findOneAndUpdate({email}, {otp, status: "pending"})
               //  console.log("user", user)
           if (optAuth === null) {
                       return res.status(401).send({
                           message: "opt errer"
                       })
                          
                   }
                   return res.send({
                     message: `MessageID is${resData.MessageId}`
                 })
           } catch (e: any) {
               logger.error(e);
               return res.status(409).send(e.message);
           } 
                
           } catch (error) {
            logger.error(error);
            return res.status(409).send("error");
           }

            }else{
// console.log("i ran")
                // Create promise and SNS service object
                var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
                // Handle promise's fulfilled/rejected states
                // console.log("publish", publishTextPromise)
                resData = await publishTextPromise
                console.log("MessageID is " + resData.MessageId); 
                try { /**MongoDb call */
           
                const optAuth = await OtpModel.create({email, otp, status: "pending"})
                  //  console.log("user", user)
              if (optAuth === null) {
                          return res.status(401).send({
                              message: "opt errer"
                          })
                             
                      }
                      return res.send({
                        message: `MessageID is${resData.MessageId}`
                    })
              } catch (e: any) {
                  logger.error(e);
                  return res.status(409).send(e.message);
              } 
            }
   
} catch (error) {
    return res.status(409).send(error);
}


    
};



const optVerifySmsHandler = async (req: Request, res: Response) => {
    const email = req.body.email
    const user = req.body
    const otp = req.body.otp
    console.log("email", req.body.email)
    console.log("email", req.body)

try {
   
    const otpAuth: any = await OtpModel.find({email})
    console.log("aptAuth", otpAuth)
       if (otpAuth.length == 0) {
            console.log(`ran from null`)
            return res.status(401).send({
                message: "opt error"
            })
               
        }else if(otpAuth[0].status === "pending"){
            console.log(`ran from pending`)
            if(otpAuth[0].otp ===  otp){
                console.log(`ran from otp comparision`)
                try { /**MongoDb call */
                    delete user.otp
                    console.log(`ran from create customer`)
                    const customer = await CustomerModel.create(user)
                    let obj:any = omit(customer.toObject(), "password");
                    try { /**MongoDb call */
                    console.log(`ran from update auth `)
                    const optAuthupdate = await OtpModel.findOneAndUpdate({email}, {status: "verified"}, {
                        new: true
                      })
                       console.log("obj", obj)
                        if (optAuthupdate === null) {
                            console.log(`ran from null auth `)
                              return res.status(401).send({
                                  message: "opt error"
                              })
                                 
                          }
                          console.log(`ran from final`)
                   return res.send(obj);
                  } catch (e: any) {
                      logger.error(e);
                      return res.status(409).send(e.message);
                  }
                } catch (e: any) {
                    logger.error(e);
                    return res.status(409).send(e.message);
                }
            }else{
                console.log(`ran from Wrong otp`)
             return res.status(409).send({
                message: "Wrong OTP"
            })
               
            }
        } else if(otpAuth[0].status === "verified"){
            console.log(`ran from Wrong otp`)
            return res.status(409).send({
                message: `User already exists with this Email"`
            })
            
            
        }


   
} catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
}
    
};
export default {
    optSendSmsHandler,
    optVerifySmsHandler
 


}