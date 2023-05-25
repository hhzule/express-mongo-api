import { Request, Response } from 'express';
import TransactionModel , {TransactionDocument} from '../models/transaction.model';
import WatchModel , {WatchDocument} from '../models/watch.model';

const createTransactionHandler = async (req: Request, res: Response) => {
  try {
    const { tokenId, to } = req.body;

    // Create a new transaction
    const transaction = await TransactionModel.create(req.body);

    // Update the holderAddress in the WatchModel for the corresponding tokenId
    // await WatchModel.updateOne({ tokenId }, { holderAddress:to });


    // Return the created transaction as the response
    return res.status(201).json(transaction);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to get all transactions
const getAllTransactionsHandler = async (req: Request, res: Response) => {
    try {
      // Retrieve all transactions from the database
    
      const transactions = await TransactionModel.find();
      console.log(transactions)
  
      // Return the transactions as the response
      return res.send(transactions);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Controller to get transactions by tokenId
  const getTransactionByTokenIdHandler = async (req: Request, res: Response) => {
    const tokenId = req.params.tokenId;
  
    try {
      // Retrieve transactions with the specified tokenId from the database
      const transactions = await TransactionModel.find({ tokenId });
  
      // If no transactions are found, return a not found response
      if (transactions.length === 0) {
        return res.status(404).json({ error: 'No transactions found for the specified tokenId' });
      }
  
      // Retrieve watch details (name and owner) based on the tokenId from the watches model
      const watchDetails = await WatchModel.findOne({ tokenId });
  
      // Prepare the response object by combining transaction data with watch details
      const response: {
        transactions: TransactionDocument[];
        watchDetails: WatchDocument | null;
      } = {
        transactions,
        watchDetails,
      };
  
      // Return the response as JSON
      return res.json(response);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  
  export { getAllTransactionsHandler, getTransactionByTokenIdHandler , createTransactionHandler };