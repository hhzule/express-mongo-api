import mongoose from 'mongoose';

export interface TransactionInput {
  tokenId: number;
  hash: string;
  time: Date;
  from: string;
  to: string;
}

export interface TransactionDocument extends TransactionInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const transactionSchema = new mongoose.Schema(
  {
    tokenId: {
      type: Number,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      required: true,
      default: Date.now,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TransactionModel = mongoose.model<TransactionDocument>('Transaction', transactionSchema);

export default TransactionModel;
