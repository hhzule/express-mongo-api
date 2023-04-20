import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface DealerInput {
    email: string;
    name: string;
    password: string
    company: string;

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
        company: {
            type: String,
            required: [true, "Please enter Company name"],
        },

    },
    {
        timestamps: true,
    }
);

const DealerModel = mongoose.model<DealerDocument>("Dealer", dealerSchema);

export default DealerModel;