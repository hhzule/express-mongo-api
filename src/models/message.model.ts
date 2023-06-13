import mongoose from "mongoose";
import watchInput from "./watch.model"

export interface Chat {
    message: string;
    type: string;
    fromId: string;
    fromEmail: string;
    toId: string;
    toEmail: string;
    accept?: string;
    reject?: string;
    read?: boolean;
    watchId: string;
}

export interface messageInput {
    firstUserId?: string;
    secondUserId?: string;
    secondUserEmail?: string,
    Chat: Chat[]
}
export interface MessageDocument extends messageInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const chatSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: [true, "Please enter message"],
        },
        type: {
            type: String,
            required: [true, "Please enter type"],
        },
        fromId: {
            type: String,
            required: [true, "Please enter fromId"],
        },
        fromEmail: {
            type: String,
            required: [true, "Please enter fromEmail"],
            
        },
        toId: {
            type: String,
            required: [true, "Please enter toId"],
        },
        toEmail: {
            type: String,
            required: [true, "Please enter toEmail"],
        },

        read: {
            type: String,
        },
        accept: {
            type: String,
        },
        reject: {
            type: String,
        },
        watchId: {
            // type: mongoose.Schema.Types.ObjectId,
            type: String,
            required: [true, "Please enter watchId"],
            ref : "Watch"
        },
    },
    {
        timestamps: true,
    }
);


const MessageSchema = new mongoose.Schema({
    firstUserId:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // required: true,
    },
    secondUserId:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // required: true,
    },
    secondUserEmail:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // required: true,
    },
    Chat: [chatSchema],
})


const MessageModel = mongoose.model<MessageDocument>("Message", MessageSchema);

export default MessageModel;