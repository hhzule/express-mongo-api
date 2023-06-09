import mongoose from "mongoose";

export interface cmsInput {
    brand?: string[];
    caseMaterial?: string[];
    braceletMaterial?: string[];
    movementMechanism?: string[],
    feature?: string[];

}

export interface CmsDocument extends cmsInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const cmsSchema = new mongoose.Schema(
    {
        brand: {
            type: [String],
        },
        caseMaterial: {
            type: [String],
        },
        braceletMaterial: {
            type: [String],
        },
        movementMechanism: {
            type: [String],
        },
        feature: {
            type: [String],
           
        }
    },
    {
        timestamps: true,
    }
);



const CmsModel = mongoose.model<CmsDocument>("CMS", cmsSchema);

export default CmsModel;