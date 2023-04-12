import mongoose from "mongoose";

export interface CustomerInput {
    email: string;
    name: string;
    password: string;
    comission: number
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
        comission: {
            type: Number,
            required: true,
            default: 1
        },
    },
    {
        timestamps: true,
    }
);



const CustomerModel = mongoose.model<CustomerDocument>("Customer", userSchema);

export default CustomerModel;