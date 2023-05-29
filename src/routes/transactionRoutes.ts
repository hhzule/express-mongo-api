import { Express } from 'express';
import { Request, Response } from 'express'; 
import transactionController from '../controller/transaction.controller';

function transactionRoutes(app: Express) {
  /**
   * Route to get all transactions
   */
  app.get('/api/transactions',transactionController.getAllTransactionsHandler);

  /**
   * Route to get transactions by tokenId
   */
  app.get('/api/transactions/:tokenId',transactionController.getTransactionByTokenIdHandler);
}

export default transactionRoutes;
