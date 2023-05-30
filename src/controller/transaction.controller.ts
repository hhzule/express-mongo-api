import { Request, Response } from 'express';
import TransactionModel , {TransactionDocument} from '../models/transaction.model';
import WatchModel , {WatchDocument} from '../models/watch.model';
import  AdminModel from '../models/admin.model';
import  customerModel from '../models/customer.model';
import  dealerModel from '../models/dealer.model';
import  {generateQRCodeWithUrl} from "./../utils/QRcodeGenerator"

const createTransactionHandler = async (req: Request, res: Response) => {
  try {
    const { tokenId, to } = req.body;
 console.log("RAWWWWWWWWW")
    // Create a new transaction
    const transaction = await TransactionModel.create(req.body);
     console.log("transaction created from controller", transaction)
    // Update the holderAddress in the WatchModel for the corresponding tokenId
    // await WatchModel.updateOne({ tokenId }, { holderAddress:to });


    // Return the created transaction as the response
    return res.status(201).json(transaction);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const appendTransactionHandler = async (req: Request, res: Response) => {
  try {
    const { tokenId, to } = req.body;

    // Create a new transaction
    const transaction = await TransactionModel.create(req.body);
    console.log("append transaction ran")
    let qrUrl = `http://localhost/watchmetadata/${tokenId}`
    console.log("qrUrl ran", qrUrl)
    const qr = await generateQRCodeWithUrl(qrUrl)

   // Update the holderAddress in the WatchModel for the corresponding tokenId
   const resp = await WatchModel.updateOne({ tokenId }, { holderAddress:to }, {qr});
   
   console.log("resp ran", resp)
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
  
  const getTransactionByTokenIdHandler = async (req: Request, res: Response) => {
    const tokenId = req.params.tokenId;
    const TID = Number(tokenId);
    
  
    try {
      // Retrieve transactions with the specified tokenId from the database
      let transactions = await TransactionModel.find({ tokenId });
  
      // If no transactions are found, return a not found response
      if (transactions.length === 0) {
        return res.status(404).json({ error: 'No transactions found for the specified tokenId' });
      }
  
      
      
  
      // Prepare an array to store modified transactions
      const modifiedTransactions: TransactionDocument[] = [];
  
      // Retrieve the admin with matching walletAddress
      if(true){

        for (let i = 0; i < transactions.length; i++) {
          const transaction = transactions[i];
        
          const admin = await AdminModel.findOne({ walletAddress: { $in: [transaction?.to, transaction?.from] } });
          console.log(admin);
        
          const dealer = await dealerModel.findOne({ walletAddress: { $in: [transaction?.to, transaction?.from] } });
          console.log(dealer);
        
          const customer = await customerModel.findOne({ walletAddress: { $in: [transaction?.to, transaction?.from] } });
          console.log(customer);
        
          if (admin) {
            if (transaction.to.toLowerCase() === admin?.walletAddress?.toLowerCase()) {
              transaction.to = admin.name;
            }
            if (transaction.from.toLowerCase() === admin?.walletAddress?.toLowerCase()) {
              transaction.from = admin.name;
            }
          }
        
          if (dealer) {
            if (transaction.to.toLowerCase() === dealer?.walletAddress?.toLowerCase()) {
              transaction.to = dealer.name;
            }
            if (transaction.from.toLowerCase() === dealer?.walletAddress?.toLowerCase()) {
              transaction.from = dealer.name;
            }
          }
        
          if (customer) {
            if (transaction.to.toLowerCase() === customer?.walletAddress?.toLowerCase()) {
              transaction.to = customer.name;
            }
            if (transaction.from.toLowerCase() === customer?.walletAddress?.toLowerCase()) {
              transaction.from = customer.name;
            }
          }
        
          if (transaction.to === "0x0000000000000000000000000000000000000000") {
            transaction.to = "Contract";
          }
        
          if (transaction.from === "0x0000000000000000000000000000000000000000") {
            transaction.from = "Contract";
          }
        
          transactions[i] = transaction;
        }
      }
  
  
      // Prepare the response object by combining modified transaction data with watch details
     // Retrieve watch details (name and owner) based on the tokenId from the watches model
     const watchDetails = await WatchModel.findOne({ tokenId });

      const response: {
        transactions: TransactionDocument[];
        watchDetails: WatchDocument | null;
      } = {
        transactions,
        watchDetails,
      };
  
      // Return the response as JSON
      return res.send(response);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


  
  export default { getAllTransactionsHandler, getTransactionByTokenIdHandler , createTransactionHandler , appendTransactionHandler};