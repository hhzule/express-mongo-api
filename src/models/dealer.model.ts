import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface DealerInput {
    email: string;
    name: string;
    password: string;
}

export interface DealerDocument extends DealerInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        company: { type: String, required: true },
        commision: { type: Number, required: true, default: 1 },
        // password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const DealerModel = mongoose.model<DealerDocument>("User", userSchema);

export default DealerModel;