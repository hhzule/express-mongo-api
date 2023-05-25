import { ethers } from "ethers";
import { provider } from "./provider";


export const wallet = async (privateKey:string) =>{
    const wallet = new ethers.Wallet(privateKey,await provider());
    return wallet
}