import mongoose from "mongoose";

export interface AdminInput {
    email: string;
    name: string;
    password: string;
    commission: string,
    walletAddress: string;
    encryptedPrivateKey: string;
}

export interface AdminDocument extends AdminInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const adminSchema = new mongoose.Schema(
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
        commission: {
            type: Number,
            required: true,
            default: 1
        },
        walletAddress: {
            type: String,
            required: [true, "Please enter walletAddress"],
        },
        encryptedPrivateKey: {
            type: String,
            required: [true, "Please enter encryptedPrivateKey"],
        },
    },
    {
        timestamps: true,
    }
);



const AdminModel = mongoose.model<AdminDocument>("Admin", adminSchema);

export default AdminModel;