import mongoose from "mongoose";
import config from "config";

export interface OptInput {
    email: string;
    otp: string;
    status: string
}

export interface OtpDocument extends OptInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const optSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter email"],
            unique: true,
        },
        otp: {
            type: String,
            required: [true, "Please enter otp"],
        },
        status: {
            type: String,
            required: [true, "Please enter status"],
        }


    },
    {
        timestamps: true,
    }
);

const OptModel = mongoose.model<OtpDocument>("Auth", optSchema);

export default OptModel;