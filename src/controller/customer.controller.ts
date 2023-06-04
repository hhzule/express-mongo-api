import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import CustomerModel from "../models/customer.model";
import { omit } from "lodash"

export type OutputObj = {
    email?: string;
    name?: string;
    password?: string;
    phone?: string;
    walletAddress?: string;
    encryptedPrivateKey?: string;
}

const createCustomerHandler = async (req: Request, res: Response) => {
    // console.log("api ran",req.body);
    let body = req.body;

    

    try { /**MongoDb call */
        const customer = await CustomerModel.create(req.body)
        let obj: OutputObj = omit(customer.toObject(), "password");
      return res.send(obj)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

const getAllCustomersHandler = async (req: Request, res: Response) => {
    try {   /**MongoDb call */
        const customers = await CustomerModel.find()
        return res.send(customers)
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};


const updateCustomerHandler = async (req: Request, res: Response) => {
    const id = req.body._id;
    const data = req.body
    try {
        /**MongoDb call */
        let updatedCustomer
        if (mongoose.Types.ObjectId.isValid(id)) {
            updatedCustomer = await CustomerModel.findByIdAndUpdate(id, { $set: { name: data.name, email: data.email, company: data.company } }, { new: true })
            if (updatedCustomer) {
                return res.send(omit(updatedCustomer.toObject(), "password"))
            }
        }

    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};
const deleteCustomerHandler = async (req: Request, res: Response) => {
    const id = req.body._id;
    try {
        /**MongoDb call */
        let deletedCustomer
        if (mongoose.Types.ObjectId.isValid(id)) {
            deletedCustomer = await CustomerModel.findByIdAndRemove(id)
            if (deletedCustomer) {
                return res.send(deletedCustomer)
            } else {
                return res.send("no such customer exits")
            }
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

const getCustomerByIdHandler = async (req: Request, res: Response) => {
    const id = req.body.id
    try {
        /**MongoDb call */
        let Customer
        if (mongoose.Types.ObjectId.isValid(id)) {
            Customer = await CustomerModel.findById(id)
            // console.log("customer", Customer)
            if (Customer) {
                console.log("Customer found")
                return res.send(omit(Customer.toObject(), "password"))
            } else {
                // console.log("Customer not found")
                return res.status(401).send({
                    message: "User not found"
                })
            }
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

const getCustomer = async (req: Request, res: Response) => {
    const email = req.params.email
    try { /**MongoDb call */
           
          const user = await CustomerModel.findOne({email: email})
            //  console.log("user", user)
        if (user === null) {
                    return res.status(401).send({
                        message: "Customer not found"
                    })
                       
                }
                    return res.send(user)
                
        

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
};

const getCustomerProfile = async (req: Request, res: Response) => {
    const id = req.params.id
    try { /**MongoDb call */
         let Customer
         if (mongoose.Types.ObjectId.isValid(id)) {
             Customer = await CustomerModel.findById(id)
             // console.log("customer", Customer)
             if (Customer) {
                 console.log("Customer found")
                 return res.send(omit(Customer.toObject(), "password"))
             } else {
                 // console.log("Customer not found")
                 return res.status(401).send({
                     message: "User not found"
                 })
             }
         }

        } catch (e: any) {
            logger.error(e);
            return res.status(409).send(e.message);
        }
};





export default {
    getCustomerProfile,
    getCustomer,
    createCustomerHandler,
    getAllCustomersHandler,
    updateCustomerHandler,
    deleteCustomerHandler,
    getCustomerByIdHandler
}