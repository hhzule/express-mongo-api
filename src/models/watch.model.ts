import mongoose from "mongoose";

export interface WatchesInput {
    name: string;
    model: string;
    price: number;
    owner: string;
    status: string;
    imgUrl: string
}

export interface WatchDocument extends WatchesInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const watchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"],
        },
        model: {
            type: String,
            required: [true, "Please enter model name"],
        },
        owner: {
            type: String,
            required: [true, "Please enter owner name"],
        },
        price: {
            type: Number,
            required: [true, "Please enter price"],
        },
        status: {
            type: String,
            required: true,
            default: "pending"
        },
        imgUrl: {
            type: Number,
            required: [true, "Please enter image"],
        },
    },
    {
        timestamps: true,
    }
);

const WatchModel = mongoose.model<WatchDocument>("Watch", watchSchema);

export default WatchModel;