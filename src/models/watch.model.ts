import mongoose from "mongoose";

export interface WatchesInput {
    name: string;
    model: string;
    price: number;
    owner: string;
    status: string;
}

export interface WatchDocument extends WatchesInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        model: { type: String, required: true },
        owner: { type: String, required: true },
        price: { type: Number, required: true },
        status: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const WatchModel = mongoose.model<WatchDocument>("Watch", userSchema);

export default WatchModel;