import { Request, Response, NextFunction } from 'express';
import { ethers } from 'ethers';
import bcrypt from 'bcrypt';

// Middleware function
function walleteGenerate(req: Request, res: Response, next: NextFunction) {
  // console.log("req",req)
  try {
    // Generate a new wallet
    console.log("middleware ren")
    const wallet = ethers.Wallet.createRandom();

    // Encrypt the private key
    const encryptedPrivateKey = bcrypt.hashSync(wallet.privateKey, 10);

    // Append wallet and encrypted private key to req.body
    req.body.walletAddress = wallet.address;
    req.body.encryptedPrivateKey = encryptedPrivateKey;
    console.log("encryptedPrivateKey", wallet.address)
    // Call the next middleware function
    next();
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default walleteGenerate;