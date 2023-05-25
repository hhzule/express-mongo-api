import { Express } from 'express';
import { Request, Response } from 'express'; 
import {
  getAllTransactionsHandler,
  getTransactionByTokenIdHandler,
} from '../controller/transaction.controller';

function transactionRoutes(app: Express) {
  /**
   * Route to get all transactions
   */
  app.get('/transactions', getAllTransactionsHandler);

  /**
   * Route to get transactions by tokenId
   */
  app.get('/transactions/:tokenId', getTransactionByTokenIdHandler);
}

export default transactionRoutes;
