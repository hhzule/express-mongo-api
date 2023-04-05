import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface DealerInput {
    email: string;
    name: string;
    company: string;
    commision: number

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

    },
    {
        timestamps: true,
    }
);

const DealerModel = mongoose.model<DealerDocument>("Dealer", userSchema);

export default DealerModel;