import mongoose from "mongoose";
import watchInput from "./watch.model"
export interface messageInput {
    quote: string;
    senderId: string;
    senderRole: string;
    receiverId: string;
    receiverRole: string;
    acccept?: string;
    reject?: string;
    read?: boolean;
    watchId: string;


}

export interface MessageDocument extends messageInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const messageSchema = new mongoose.Schema(
    {
        quote: {
            type: String,
            required: [true, "Please enter quote"],
        },
        senderId: {
            type: String,
            required: [true, "Please enter senderId"],
        },
        senderEmail: {
            type: String,
            required: [true, "Please enter senderEmail"],
        },
        receiverId: {
            type: String,
            required: [true, "Please enter receiverId"],
        },
        acccept: {
            type: String,
        },
        reject: {
            type: String,
        },
        read: {
            type: String,
        },
        watchId: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Please enter watchId"],
            ref : "Watch"
        },
        receiverRole: {
            type: String,
        },
        senderRole: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);



const MessageModel = mongoose.model<MessageDocument>("Message", messageSchema);

export default MessageModel;