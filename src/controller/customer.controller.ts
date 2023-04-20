import { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "../utils/logger";
import CustomerModel from "../models/customer.model";
import { omit } from "lodash"


const createCustomerHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    try { /**MongoDb call */
        const customer = await CustomerModel.create(req.body)
        return res.send(omit(customer.toObject(), "password"))
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
    const id = req.body._id;
    try {
        /**MongoDb call */
        let Customer
        if (mongoose.Types.ObjectId.isValid(id)) {
            Customer = await CustomerModel.findById(id)
            if (Customer) {
                return res.send(omit(Customer.toObject(), "password"))
            } else {
                return res.send("no such customer exits")
            }
        }
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};

export default {
    createCustomerHandler,
    getAllCustomersHandler,
    updateCustomerHandler,
    deleteCustomerHandler,
    getCustomerByIdHandler
}