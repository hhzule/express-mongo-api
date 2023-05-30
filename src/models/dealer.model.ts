import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface DealerInput {
    email: string;
    name: string;
    password: string;
    businessName: string;
    businessRegCertificate: string;
    phoneNumber: string;
    emergencyNumber: string;
    businessAddress: string;
    brandName?: string;
    serialNumber?: string;
    model: string;
    offers: string;
    walletAddress?: string;
    encryptedPrivateKey?: string;

}

export interface DealerDocument extends DealerInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
}

const dealerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter email"],
            unique: true,
            // validate: [(val: any) => {
            //     let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            //     return regex.test(val)
            // }, "Please enter a valid email"]
        },
        name: {
            type: String,
            required: [true, "Please enter name"],
        },
        password: {
            type: String,
            required: [true, "Please enter password"],
            minlength: [6, "minimum password length is 6 characters"]
        },


        businessName: {
            type: String,
            required: [true, "Please enter business name"],
        },
        businessRegCertificate: {
            type: String,
            required: [true, "Please enter business Registration Certificate"],
        },
        phoneNumber: {
            type: String,
            required: [true, "Please enter phone number"],
        },
        emergencyNumber: {
            type: String,
            required: [true, "Please enter emergency number"],
        },
        businessAddress: {
            type: String,
            required: [true, "Please enter business address"],
        },
        brandName: {
            type: String,
            // required: [true, "Please enter brand name"],
        },
        serialNumber: {
            type: String,
            // required: [true, "Please enter name"],
        },
        model: {
            type: String,
            required: [true, "Please enter serial number"],
        },
        offers: {
            type: String,
            required: [true, "Please enter offers"],
        },
        walletAddress: {
            type: String,
        },
        encryptedPrivateKey: {
            type: String,      
        },



    },
    {
        timestamps: true,
    }
);

const DealerModel = mongoose.model<DealerDocument>("Dealer", dealerSchema);

export default DealerModel;