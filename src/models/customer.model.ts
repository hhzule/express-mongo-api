import mongoose from "mongoose";

export interface CustomerInput {
    email: string;
    name: string;
    password: string;
    phone: string;
    walletAddress?: string;
    encryptedPrivateKey?: string;

}

export interface CustomerDocument extends CustomerInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
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
        phone: {
            type: String,
            required: [true, "Please enter phone number"],
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



const CustomerModel = mongoose.model<CustomerDocument>("Customer", userSchema);

export default CustomerModel;