import mongoose from "mongoose";

export interface Input {
    to: string;
    status: boolean
}

export interface CorrespondenceDocument extends Input, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}
const correspodenceSchema = new mongoose.Schema(
    {
        to: {
            type: String,
        },
        status: {
            type: Boolean,
        }
    },
    {
        timestamps: true,
    }
);

const CustomerMessagesModel = mongoose.model<CorrespondenceDocument>("CustomerMessage", correspodenceSchema);
const AdminMessagesModel = mongoose.model<CorrespondenceDocument>("AdminMessage", correspodenceSchema);
const DealerMessagesModel = mongoose.model<CorrespondenceDocument>("DealerMessage", correspodenceSchema);

export default { CustomerMessagesModel, AdminMessagesModel , DealerMessagesModel };