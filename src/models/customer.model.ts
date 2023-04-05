import mongoose from "mongoose";

export interface CustomerInput {
    email: string;
    name: string;
    password: string;
}

export interface CustomerDocument extends CustomerInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        commision: { type: Number, required: true, default: 1 },
    },
    {
        timestamps: true,
    }
);



const CustomerModel = mongoose.model<CustomerDocument>("Customer", userSchema);

export default CustomerModel;