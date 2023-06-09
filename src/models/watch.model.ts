import mongoose from "mongoose";

export interface WatchesInput {
    name: string;
    model: string;
    price: number;
    owner: string;
    status: string;
    imgUrl: string[];
    creator: mongoose.Schema.Types.ObjectId,
    creatorEmail?: string,
    creatorRole?: string,
    serialNumber: string;
    caseMaterial: string;
    braceletMaterial: string;
    movementModel: string;
    movementSerial: string;
    movementMechanism: string;
    dialColor: string;
    hands: string;
    feature: string;
    tokenId: string;
    holderAddress: string;
    qrcode: string
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
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            // ref: "Dealer",
            // required: [true, "Please enter creator id"],
          },
          creatorEmail: {
            type: String,
            // ref: "Dealer",
            // required: [true, "Please enter creator id"],
          },
        creatorRole: {
            type:String,
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
            type: [String],
            required: [true, "Please enter image"],
        },
        serialNumber: {
            type: String,
            required: [true, "Please enter serialNumber"],
        },
        caseMaterial: {
            type: String,
            required: [true, "Please enter caseMaterial"],
        },
        braceletMaterial: {
            type: String,
            required: [true, "Please enter braceletMaterial"],
        },
        movementModel: {
            type: String,
            required: [true, "Please enter movementModel"],
        },
        movementSerial: {
            type: String,
            required: [true, "Please enter movementSerial"],

        },
        movementMechanism: {
            type: String,
            required: [true, "Please enter movementMechanism"],
        },
        dialColor: {
            type: String,
            required: [true, "Please enter dialColor"],
        },
        hands: {
            type: String,
            required: [true, "Please enter hands"],
        },
        feature: {
            type: String,
            required: [true, "Please enter featue"],
        },
        tokenId: {
            type: String,
            // required: [true, "Please enter featue"],
        },
        holderAddress: {
            type: String,
            required: [true, "Please Wallet Address"],
        },
        qrcode:{
            type: String,
            // required: [true, "Please Wallet Address"],
        }
    },
    {
        timestamps: true,
    }
);

const WatchModel = mongoose.model<WatchDocument>("Watch", watchSchema);

export default WatchModel;